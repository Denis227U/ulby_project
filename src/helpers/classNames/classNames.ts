type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[],
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}

// additional - это классы которые идут без каких-либо условий, просто дополнительные
// classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pgd'])
// 'remove-btn hovered selectable pgd'
