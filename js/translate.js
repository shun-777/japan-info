document.addEventListener("DOMContentLoaded", function () {
  const langSelects = document.querySelectorAll("#lang-select-pc, #lang-select-sp");
  const currentLang = localStorage.getItem("lang") || "ja";

  // 各セレクトボックスに現在の言語を設定
  langSelects.forEach(select => select.value = currentLang);

  // 初回適用
  fetchTranslations(currentLang);

  // 言語選択の変更イベントを全てのセレクトボックスに設定
  langSelects.forEach(select => {
    select.addEventListener("change", function () {
      const selectedLang = this.value;
      localStorage.setItem("lang", selectedLang);
      fetchTranslations(selectedLang);

      // すべてのセレクトボックスの値を同期
      langSelects.forEach(s => s.value = selectedLang);
    });
  });

  function fetchTranslations(lang) {
    fetch("lang/lang.json")
      .then(response => response.json())
      .then(data => {
        ["header", "footer", "btn", "index", "charm", "season", "traditional", "sightseeing", "contact"]
          .forEach(section => {
            if (data[section] && data[section][lang]) {
              updateText(data[section][lang]);
            }
          });
      })
      .catch(error => console.error("翻訳データの取得に失敗しました:", error));
  }

  function updateText(translations) {
    document.querySelectorAll("[data-key]").forEach(element => {
      const key = element.getAttribute("data-key");
      if (translations[key]) {
        element.textContent = translations[key];
      }
    });
  }
});
