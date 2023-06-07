export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: (string | undefined)[] = [],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}

// additional - это классы которые идут без каких-либо условий, просто дополнительные
// classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pgd'])
// 'remove-btn hovered selectable pgd'
