import { Input } from "../ui/input";

export function MatrixInput({ size, values, onChange }: { size: number, values: string[], onChange: (index: number, value: string) => void }) {
    return (
        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
            {Array.from({ length: size * size }).map((_, index) => (
                <Input
                    key={index}
                    type="text"
                    value={values[index]} 
                    onChange={(e) => onChange(index, e.target.value)}
                    className="w-16 h-16 text-center"
                    required
                />
            ))}
        </div>
    )
}
