(() => {
  var t = {
      989: (t) => {
        t.exports = function (t) {
          const n = $("#contenedor-tarjetas");
          n.empty(),
            t.forEach(function (t, r) {
              const s = $("<div>").addClass("card"),
                a = $("<img>").attr("src", t.poster).addClass("first-content"),
                o = $("<div>").addClass("card-body"),
                e = $("<h5>").addClass("card-title").text(t.title),
                d = $("<p>")
                  .addClass("second-content")
                  .html(
                    `\n      <strong>Año:</strong> ${
                      t.year
                    }<br>\n      <strong>Director:</strong> ${
                      t.director
                    }<br>\n      <strong>Duración:</strong> ${
                      t.duration
                    }<br>\n      <strong>Género:</strong> ${t.genre.join(
                      ", "
                    )}<br>\n      <strong>Rate:</strong> ${(function (t, n) {
                      let r = "";
                      const s = Math.round(2 * t) / 2;
                      for (let t = 1; t <= 5; t++) {
                        const a = $("<i>")
                          .addClass("star fas fa-star")
                          .attr("data-index", n);
                        t <= s && a.addClass("filled"), (r += a[0].outerHTML);
                      }
                      return `<div class="star-container">${r}</div>`;
                    })(t.rate, r)}<br>\n    `
                  );
              o.append(e, d), s.append(a, o), n.append(s);
            }),
            $("#buscador").on("input", function () {
              const t = $(this).val().toLowerCase();
              $(".card").each(function () {
                const n = $(this).find(".card-title").text().toLowerCase();
                $(this).toggle(n.includes(t));
              });
            }),
            $(document).on("click", ".star", function () {
              const t = $(this).attr("data-index"),
                n = $(".card").eq(t).find(".star"),
                r = n.index(this);
              n.removeClass("filled"), n.slice(0, r + 1).addClass("filled");
            });
        };
      },
    },
    n = {};
  function r(s) {
    var a = n[s];
    if (void 0 !== a) return a.exports;
    var o = (n[s] = { exports: {} });
    return t[s](o, o.exports, r), o.exports;
  }
  (() => {
    const t = r(989);
    $.get("https://students-api.up.railway.app/movies", function (n, r) {
      t(n);
    });
  })();
})();
