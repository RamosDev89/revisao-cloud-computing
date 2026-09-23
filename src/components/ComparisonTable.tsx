interface Props {
  headers: string[];
  rows: string[][];
}

export function ComparisonTable({ headers, rows }: Props) {
  return (
    <div className="overflow-x-auto my-4 rounded-lg surface">
      <table className="w-full text-sm border-collapse min-w-[400px]">
        <thead>
          <tr style={{ background: 'var(--color-green)', color: '#fff' }}>
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left px-4 py-2.5 font-semibold"
                style={{ borderBottom: '1px solid var(--color-border)' }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              style={{
                background: ri % 2 === 0 ? 'var(--color-surface)' : 'var(--color-green-light)',
              }}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-2.5 ${ci === 0 ? 'font-medium' : ''}`}
                  style={{
                    borderBottom: '1px solid var(--color-border)',
                    color: ci === 0 ? 'var(--color-green)' : 'var(--color-text)',
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
