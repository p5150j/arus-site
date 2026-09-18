import type { DiagramStage } from '@/lib/site-data';

interface FlowDiagramProps {
  stages: DiagramStage[];
  boundary?: { from: number; to: number; label: string };
  title?: string;
}

const BOX_W = 150;
const BOX_H = 60;
const GAP = 44;
const PAD_X = 12;
const PAD_TOP = 34;
const PAD_BOTTOM = 16;

/**
 * Horizontal flow of labeled boxes joined by arrows, drawn as inline SVG.
 * Uses currentColor so it follows the theme. Scales with its container.
 */
export default function FlowDiagram({ stages, boundary, title }: FlowDiagramProps) {
  const n = stages.length;
  const width = PAD_X * 2 + n * BOX_W + (n - 1) * GAP;
  const height = PAD_TOP + BOX_H + PAD_BOTTOM;
  const y = PAD_TOP;
  const xOf = (i: number) => PAD_X + i * (BOX_W + GAP);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto text-paper"
      role="img"
      aria-label={title ?? stages.map((s) => s.label).join(' → ')}
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" opacity="0.5" />
        </marker>
      </defs>

      {boundary && (
        <g>
          <rect
            x={xOf(boundary.from) - 10}
            y={y - 22}
            width={xOf(boundary.to) + BOX_W - xOf(boundary.from) + 20}
            height={BOX_H + 40}
            rx={6}
            fill="none"
            stroke="var(--accent)"
            strokeOpacity="0.7"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <text
            x={xOf(boundary.from) - 4}
            y={y - 28}
            fill="var(--accent)"
            fontSize="10"
            fontFamily="var(--font-geist-mono), monospace"
            letterSpacing="0.12em"
          >
            {boundary.label.toUpperCase()}
          </text>
        </g>
      )}

      {stages.map((s, i) => {
        const x = xOf(i);
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={BOX_W}
              height={BOX_H}
              rx={4}
              fill="currentColor"
              fillOpacity="0.035"
              stroke="currentColor"
              strokeOpacity="0.28"
              strokeWidth="1"
            />
            <text
              x={x + BOX_W / 2}
              y={y + (s.sub ? 26 : 35)}
              textAnchor="middle"
              fill="currentColor"
              fontSize="13"
              fontWeight="600"
              fontFamily="var(--font-geist-sans), system-ui, sans-serif"
            >
              {s.label}
            </text>
            {s.sub && (
              <text
                x={x + BOX_W / 2}
                y={y + 44}
                textAnchor="middle"
                fill="currentColor"
                fillOpacity="0.55"
                fontSize="11"
                fontFamily="var(--font-geist-mono), monospace"
              >
                {s.sub}
              </text>
            )}
            {i < n - 1 && (
              <line
                x1={x + BOX_W + 4}
                y1={y + BOX_H / 2}
                x2={x + BOX_W + GAP - 4}
                y2={y + BOX_H / 2}
                stroke="currentColor"
                strokeOpacity="0.5"
                strokeWidth="1"
                markerEnd="url(#arrow)"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
