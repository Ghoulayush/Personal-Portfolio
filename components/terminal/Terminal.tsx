"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent, KeyboardEvent, MouseEvent } from "react";
import { commands } from "@/data/terminal";
import { getSuggestions, runCommand } from "@/lib/terminal";
import type { CommandName, TerminalLine } from "@/types/terminal";

const toneClass = {
  default: "text-ink",
  muted: "text-ink-faint",
  error: "text-accent",
  accent: "text-accent",
} as const;

export function Terminal() {
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [announcement, setAnnouncement] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const suggestions = getSuggestions(input);
  const isOpen = suggestions.length > 0;
  const activeIndex = isOpen
    ? Math.min(suggestionIndex, suggestions.length - 1)
    : 0;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const element = outputRef.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [history]);

  function appendLines(lines: TerminalLine[]) {
    setHistory((current) => [...current, ...lines].slice(-100));
  }

  function executeCommand(raw: string) {
    const trimmed = raw.trim();
    appendLines([{ kind: "input", text: raw }]);
    setInput("");
    setSuggestionIndex(0);

    if (!trimmed) return;

    const normalized = trimmed.toLowerCase();
    if (normalized === "clear") {
      setHistory([]);
      setAnnouncement("Terminal cleared");
      return;
    }

    const lines = runCommand(normalized);
    appendLines(lines);
    setAnnouncement(
      lines[0]?.kind === "output" && lines[0].tone === "error"
        ? lines[0].text
        : `Command "${normalized}": ${lines.length} line${
            lines.length === 1 ? "" : "s"
          }`,
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    executeCommand(isOpen ? suggestions[activeIndex] : input);
  }

  function handleChange(value: string) {
    setInput(value);
    setSuggestionIndex(0);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Tab") {
      event.preventDefault();
      if (isOpen) {
        setInput(suggestions[activeIndex]);
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (isOpen) {
        setSuggestionIndex((index) => (index + 1) % suggestions.length);
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (isOpen) {
        setSuggestionIndex(
          (index) => (index - 1 + suggestions.length) % suggestions.length,
        );
      }
    } else if (event.key === "Escape") {
      setInput("");
    }
  }

  function handleSuggestionMouseDown(
    event: MouseEvent<HTMLLIElement>,
    name: CommandName,
  ) {
    event.preventDefault();
    executeCommand(name);
  }

  return (
    <div className="border border-line bg-surface">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
          portfolio — /home
        </p>
        <p className="font-mono text-xs text-ink-faint">
          {commands.length} commands
        </p>
      </div>

      <div
        ref={outputRef}
        className="max-h-96 overflow-y-auto px-4 py-4"
        role="region"
        aria-label="Terminal output"
      >
        <p
          id="terminal-hint"
          className={`font-mono text-sm text-ink-faint ${
            history.length > 0 ? "hidden" : ""
          }`}
        >
          Type &quot;help&quot; and press Enter to get started. Tab completes
          commands.
        </p>
        {history.map((line, index) =>
          line.kind === "input" ? (
            <p key={index} className="font-mono text-sm leading-relaxed">
              <span aria-hidden="true" className="text-accent">
                ❯{" "}
              </span>
              <span className="text-ink">{line.text}</span>
            </p>
          ) : (
            <p
              key={index}
              className={`whitespace-pre-wrap font-mono text-sm leading-relaxed ${toneClass[line.tone]}`}
            >
              {line.text}
            </p>
          ),
        )}
      </div>

      {isOpen && (
        <ul
          id="terminal-suggestions"
          role="listbox"
          aria-label="Command suggestions"
          className="border-t border-line bg-paper"
        >
          {suggestions.map((name, index) => {
            const description =
              commands.find((command) => command.name === name)?.description ??
              "";
            const active = index === activeIndex;
            return (
              <li
                key={name}
                id={`terminal-suggestion-${name}`}
                role="option"
                aria-selected={active}
                onMouseEnter={() => setSuggestionIndex(index)}
                onMouseDown={(event) => handleSuggestionMouseDown(event, name)}
                className={`flex items-baseline gap-2 px-4 py-2 font-mono text-sm ${
                  active
                    ? "bg-line/60 text-ink"
                    : "text-ink-soft hover:bg-line/30"
                }`}
              >
                <span aria-hidden="true" className="shrink-0 text-accent">
                  ❯
                </span>
                <span className="shrink-0">{name}</span>
                <span className="truncate text-xs text-ink-faint">
                  {description}
                </span>
              </li>
            );
          })}
        </ul>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-line px-4 py-3 has-[:focus-visible]:bg-line/30"
      >
        <label htmlFor="terminal-input" className="sr-only">
          Portfolio terminal command
        </label>
        <span aria-hidden="true" className="shrink-0 font-mono text-sm text-accent">
          ❯
        </span>
        <input
          ref={inputRef}
          id="terminal-input"
          type="text"
          value={input}
          onChange={(event) => handleChange(event.target.value)}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={isOpen ? "terminal-suggestions" : undefined}
          aria-activedescendant={
            isOpen ? `terminal-suggestion-${suggestions[activeIndex]}` : undefined
          }
          aria-describedby="terminal-hint"
          autoComplete="off"
          spellCheck={false}
          placeholder="type a command"
          className="w-full bg-transparent font-mono text-sm text-ink caret-accent placeholder:text-ink-faint focus:outline-none"
        />
      </form>

      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>
    </div>
  );
}
