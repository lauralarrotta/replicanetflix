(() => {
  var t = {
      261: (t) => {
        t.exports = function (t) {
          const r = $("#contenedor-tarjetas");
          r.empty(),
            t.forEach(function (t) {
              const n = $("<div>").addClass("card"),
                s = $("<img>").attr("src", t.poster).addClass("first-content"),
                a = $("<div>").addClass("card-body"),
                o = $("<h5>").addClass("card-title").text(t.title),
                e = $("<p>")
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
                    )}<br>\n      <strong>Rate:</strong> ${(function (t) {
                      let r = "";
                      const n = Math.round(2 * t) / 2;
                      for (let t = 1; t <= 5; t++)
                        r +=
                          t <= n
                            ? '<i class="fas fa-star"></i>'
                            : t - n <= 0.5
                            ? '<i class="fas fa-star-half-alt"></i>'
                            : '<i class="far fa-star"></i>';
                      return r;
                    })(t.rate)}<br>\n    `
                  );
              a.append(o, e), n.append(s, a), r.append(n);
            }),
            $("#buscador").on("input", function () {
              const t = $(this).val().toLowerCase();
              $(".card").each(function () {
                const r = $(this).find(".card-title").text().toLowerCase();
                $(this).toggle(r.includes(t));
              });
            });
        };
      },
    },
    r = {};
  function n(s) {
    var a = r[s];
    if (void 0 !== a) return a.exports;
    var o = (r[s] = { exports: {} });
    return t[s](o, o.exports, n), o.exports;
  }
  (() => {
    const t = n(261);
    $.get("https://students-api.up.railway.app/movies", function (r, n) {
      t(r);
    });
  })();
})();
