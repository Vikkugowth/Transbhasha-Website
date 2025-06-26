// Tailwind Migration Helper Utilities

class TailwindMigrationHelper {
  constructor() {
    this.cssClassMap = new Map()
    this.initializeClassMapping()
  }

  // CSS to Tailwind class mapping
  initializeClassMapping() {
    this.cssClassMap.set("display: flex", "flex")
    this.cssClassMap.set("display: grid", "grid")
    this.cssClassMap.set("align-items: center", "items-center")
    this.cssClassMap.set("justify-content: center", "justify-center")
    this.cssClassMap.set("flex-direction: column", "flex-col")
    this.cssClassMap.set("gap: 1rem", "gap-4")
    this.cssClassMap.set("padding: 1rem", "p-4")
    this.cssClassMap.set("margin: 0 auto", "mx-auto")
    this.cssClassMap.set("max-width: 1200px", "max-w-6xl")
    this.cssClassMap.set("border-radius: 0.5rem", "rounded-lg")
    this.cssClassMap.set("background-color: var(--primary)", "bg-primary")
    this.cssClassMap.set("color: var(--foreground)", "text-foreground")
  }

  // Analyze existing CSS and suggest Tailwind classes
  analyzeCSSFile(cssContent) {
    const suggestions = []
    const rules = this.parseCSSRules(cssContent)

    rules.forEach((rule) => {
      const tailwindEquivalent = this.findTailwindEquivalent(rule)
      if (tailwindEquivalent) {
        suggestions.push({
          original: rule,
          tailwind: tailwindEquivalent,
          selector: rule.selector,
        })
      }
    })

    return suggestions
  }

  // Convert CSS properties to Tailwind classes
  convertToTailwind(cssProperty, value) {
    const propertyMap = {
      display: {
        flex: "flex",
        grid: "grid",
        block: "block",
        inline: "inline",
        none: "hidden",
      },
      position: {
        relative: "relative",
        absolute: "absolute",
        fixed: "fixed",
        sticky: "sticky",
      },
      padding: this.convertSpacing,
      margin: this.convertSpacing,
      width: this.convertSize,
      height: this.convertSize,
      "background-color": this.convertColor,
      color: this.convertColor,
      "border-radius": this.convertBorderRadius,
    }

    const converter = propertyMap[cssProperty]
    if (typeof converter === "function") {
      return converter(value)
    } else if (typeof converter === "object") {
      return converter[value] || null
    }
    return null
  }

  convertSpacing(value) {
    const spacingMap = {
      0: "0",
      "0.25rem": "1",
      "0.5rem": "2",
      "0.75rem": "3",
      "1rem": "4",
      "1.25rem": "5",
      "1.5rem": "6",
      "2rem": "8",
      "2.5rem": "10",
      "3rem": "12",
    }
    return spacingMap[value] || value
  }

  convertColor(value) {
    if (value.startsWith("var(--")) {
      const varName = value.slice(6, -1) // Remove 'var(--' and ')'
      return varName.replace(/-/g, "-")
    }
    return value
  }

  convertBorderRadius(value) {
    const radiusMap = {
      "0.25rem": "rounded",
      "0.375rem": "rounded-md",
      "0.5rem": "rounded-lg",
      "0.75rem": "rounded-xl",
      "1rem": "rounded-2xl",
      "50%": "rounded-full",
    }
    return radiusMap[value] || "rounded"
  }

  // Generate Tailwind config for custom values
  generateTailwindConfig(existingCSS) {
    const customColors = this.extractCustomColors(existingCSS)
    const customSpacing = this.extractCustomSpacing(existingCSS)
    const customFonts = this.extractCustomFonts(existingCSS)

    return {
      theme: {
        extend: {
          colors: customColors,
          spacing: customSpacing,
          fontFamily: customFonts,
          animation: {
            "fade-in-up": "fadeInUp 0.6s ease-out forwards",
            pulse: "pulse 1.5s infinite",
          },
          keyframes: {
            fadeInUp: {
              from: {
                opacity: "0",
                transform: "translateY(30px)",
              },
              to: {
                opacity: "1",
                transform: "translateY(0)",
              },
            },
          },
        },
      },
      plugins: [],
    }
  }

  extractCustomColors(cssContent) {
    const colorRegex = /--([^:]+):\s*([^;]+);/g
    const colors = {}
    let match

    while ((match = colorRegex.exec(cssContent)) !== null) {
      const [, name, value] = match
      colors[name.replace(/-/g, "-")] = value.trim()
    }

    return colors
  }

  extractCustomSpacing(cssContent) {
    // Extract custom spacing values
    const spacingRegex = /(?:padding|margin|gap):\s*([^;]+);/g
    const spacing = {}
    let match

    while ((match = spacingRegex.exec(cssContent)) !== null) {
      const value = match[1].trim()
      if (!value.includes("rem") && !value.includes("px")) continue

      const key = value.replace(/[^\d.]/g, "").replace(".", "-")
      spacing[key] = value
    }

    return spacing
  }

  // Migration validation
  validateMigration(originalElement, migratedElement) {
    const originalStyles = window.getComputedStyle(originalElement)
    const migratedStyles = window.getComputedStyle(migratedElement)

    const criticalProperties = [
      "display",
      "position",
      "width",
      "height",
      "padding",
      "margin",
      "backgroundColor",
      "color",
    ]

    const differences = []
    criticalProperties.forEach((prop) => {
      if (originalStyles[prop] !== migratedStyles[prop]) {
        differences.push({
          property: prop,
          original: originalStyles[prop],
          migrated: migratedStyles[prop],
        })
      }
    })

    return {
      isValid: differences.length === 0,
      differences,
    }
  }

  // Batch migration helper
  migrateComponent(componentSelector, classMapping) {
    const elements = document.querySelectorAll(componentSelector)
    const results = []

    elements.forEach((element, index) => {
      const originalClasses = element.className
      const newClasses = this.applyClassMapping(originalClasses, classMapping)

      results.push({
        element: element,
        index: index,
        originalClasses: originalClasses,
        newClasses: newClasses,
        success: true,
      })

      // Apply new classes (commented out for safety)
      // element.className = newClasses;
    })

    return results
  }

  applyClassMapping(originalClasses, mapping) {
    let newClasses = originalClasses

    Object.entries(mapping).forEach(([oldClass, newClass]) => {
      newClasses = newClasses.replace(new RegExp(oldClass, "g"), newClass)
    })

    return newClasses
  }
}

// Usage example
const migrationHelper = new TailwindMigrationHelper()

// Export for use in other modules
export { TailwindMigrationHelper }
