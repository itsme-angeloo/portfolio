"use client";

import { useEffect, useRef, useState } from "react";

type ThemePreference = "light" | "dark" | "system";

const themeOptions: ThemePreference[] = ["system", "light", "dark"];
const storageKey = "angelo-theme";

function getStoredPreference(): ThemePreference {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(storageKey);
  return stored === "light" || stored === "dark" || stored === "system"
    ? stored
    : "light";
}

function resolveTheme(preference: ThemePreference) {
  if (preference !== "system") {
    return preference;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeControl() {
  const [preference, setPreference] =
    useState<ThemePreference>(getStoredPreference);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    document.documentElement.dataset.theme = resolveTheme(preference);
    document.documentElement.dataset.themePreference = preference;

    const handleSystemChange = () => {
      if (preference === "system") {
        document.documentElement.dataset.theme = resolveTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, [preference]);

  const updatePreference = (nextPreference: ThemePreference) => {
    window.localStorage.setItem(storageKey, nextPreference);
    setPreference(nextPreference);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      className="theme-control relative text-[12px] leading-none"
      ref={wrapperRef}
    >
      <button
        type="button"
        aria-label="Choose appearance"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex h-5 w-5 items-center justify-center text-secondary transition-colors duration-200 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
      >
        ◐
      </button>

      {isOpen ? (
        <div
          role="menu"
          aria-label="Theme preference"
          className="absolute right-0 top-7 z-30 min-w-28 border border-border bg-background p-1 text-secondary shadow-none"
        >
          {themeOptions.map((option) => (
            <button
              key={option}
              type="button"
              role="menuitemradio"
              aria-checked={preference === option}
              onClick={() => updatePreference(option)}
              className="flex w-full items-center justify-between gap-4 px-3 py-2 text-left capitalize transition-colors duration-200 hover:bg-surface-soft hover:text-primary focus-visible:bg-surface-soft focus-visible:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus aria-checked:bg-surface-soft aria-checked:text-primary"
            >
              <span>{option}</span>
              <span aria-hidden="true">{preference === option ? "•" : ""}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
