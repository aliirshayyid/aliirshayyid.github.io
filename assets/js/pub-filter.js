/*
 * Publication filters (Year / Type / Topic).
 *
 * Builds one row of toggle buttons per group from the data attributes on each
 * .pub-card. Selections within a group are OR-ed (2025 or 2026); groups are
 * AND-ed together (2026 and Journal and Battery Systems). Without JavaScript
 * every publication simply stays visible.
 */
(function () {
  'use strict';

  var GROUPS = [
    { key: 'year', label: 'Year', attr: 'data-year' },
    {
      key: 'type', label: 'Type', attr: 'data-type',
      order: ['Journal', 'Conference', 'Book Chapter', 'Under Review', 'Dissertation', 'Presentation']
    },
    { key: 'topic', label: 'Topic', attr: 'data-topics' }
  ];

  function valuesOf(card, group) {
    return (card.getAttribute(group.attr) || '')
      .split(',')
      .map(function (s) { return s.trim(); })
      .filter(Boolean);
  }

  function sortNames(group, counts) {
    var names = Object.keys(counts);
    if (group.key === 'year') {
      return names.sort(function (a, b) { return Number(b) - Number(a); });
    }
    if (group.order) {
      return names.sort(function (a, b) {
        return group.order.indexOf(a) - group.order.indexOf(b);
      });
    }
    return names.sort(function (a, b) {
      return counts[b] - counts[a] || a.localeCompare(b);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var wrapper = document.getElementById('publications-wrapper');
    var filtersEl = document.getElementById('pub-filters');
    if (!wrapper || !filtersEl) return;

    var statusEl = document.getElementById('pub-filter-status');
    var emptyEl = document.getElementById('pub-empty');
    var cards = Array.prototype.slice.call(wrapper.querySelectorAll('.pub-card'));
    var active = {};
    var buttons = [];

    GROUPS.forEach(function (group) {
      active[group.key] = new Set();

      var counts = {};
      cards.forEach(function (card) {
        valuesOf(card, group).forEach(function (v) {
          counts[v] = (counts[v] || 0) + 1;
        });
      });

      var row = document.createElement('div');
      row.className = 'pub-filter-row';

      var label = document.createElement('span');
      label.className = 'pub-filter-label';
      label.textContent = group.label;
      row.appendChild(label);

      var list = document.createElement('div');
      list.className = 'pub-filter-buttons';

      sortNames(group, counts).forEach(function (name) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'filter-btn';
        btn.textContent = name + ' (' + counts[name] + ')';
        btn.setAttribute('aria-pressed', 'false');
        btn.addEventListener('click', function () {
          var set = active[group.key];
          if (set.has(name)) { set.delete(name); } else { set.add(name); }
          var on = set.has(name);
          btn.classList.toggle('active', on);
          btn.setAttribute('aria-pressed', on ? 'true' : 'false');
          apply();
        });
        buttons.push(btn);
        list.appendChild(btn);
      });

      row.appendChild(list);
      filtersEl.appendChild(row);
    });

    function clearAll() {
      GROUPS.forEach(function (g) { active[g.key].clear(); });
      buttons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      apply();
    }

    function apply() {
      var anyActive = GROUPS.some(function (g) { return active[g.key].size > 0; });
      var shown = 0;

      cards.forEach(function (card) {
        var visible = GROUPS.every(function (g) {
          var set = active[g.key];
          if (set.size === 0) return true;
          return valuesOf(card, g).some(function (v) { return set.has(v); });
        });
        card.classList.toggle('hidden', !visible);
        if (visible) shown += 1;

        card.querySelectorAll('.inner-tag-badge').forEach(function (badge) {
          var set = active[badge.getAttribute('data-group')];
          badge.classList.toggle('active', !!set && set.has(badge.textContent.trim()));
        });
      });

      if (emptyEl) emptyEl.hidden = shown !== 0;
      if (statusEl) {
        statusEl.textContent = '';
        if (anyActive) {
          statusEl.appendChild(document.createTextNode(
            'Showing ' + shown + ' of ' + cards.length + ' publications. '));
          var clear = document.createElement('button');
          clear.type = 'button';
          clear.className = 'filter-clear';
          clear.textContent = 'Clear filters';
          clear.addEventListener('click', clearAll);
          statusEl.appendChild(clear);
        }
      }
    }

    apply();
  });
})();
