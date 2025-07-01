export function setCssVariable(cssVariableName, value) {
  document.documentElement.style.setProperty(cssVariableName, value);
}

export async function loadThemes() {
  const res = await fetch("/assets/constant/theme.json");
  return await res.json();
}

export function applyThemeVars(themeData) {
  if (!themeData) return;
  for (const [key, value] of Object.entries(themeData)) {
    const cssVar = "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase();
    setCssVariable(cssVar, value);
  }
}
