type SectionPosition = {
  id: string;
  top: number;
};

export function getActiveSectionId(
  sections: readonly SectionPosition[],
  activationPoint: number,
  isScrolledToBottom: boolean,
): string | null {
  let activeSectionId: string | null = null;

  for (const { id, top } of sections) {
    if (top <= activationPoint) {
      activeSectionId = id;
    }
  }

  if (isScrolledToBottom) {
    return sections.at(-1)?.id ?? activeSectionId;
  }

  return activeSectionId;
}
