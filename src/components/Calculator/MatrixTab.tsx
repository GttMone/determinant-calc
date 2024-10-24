import { useEffect, useState } from "react"

import { calculate2X2, calculate3X3, calculate4X4 } from "@/lib/calculator";

import { MatrixInput } from "./MatrixInput"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"


export function MatrixTab({ size }: { size: number }) {
    const [values, setValues] = useState<string[]>(Array.from({ length: size * size }, () => ''));
    const [result, setResult] = useState('');

    useEffect(() => {
        window.addEventListener('keydown', handleShortcuts);
        return () => window.removeEventListener('keydown', handleShortcuts);
    }, []);

    return (
        <Card>
            <form onSubmit={calculate}>
                <CardContent>
                    <div className="flex flex-col items-center gap-4 my-10">
                        <MatrixInput size={size} values={values} onChange={handleInputChange} />
                    </div>
                    <h1 className={`text-center font-bold text-lg ${!result && 'text-muted-foreground font-normal'}`}>Result: {result || '-'}</h1>
                </CardContent>
                <CardFooter>
                    <div className="flex items-center justify-between w-full">
                        <Button onClick={clear} variant='secondary' type="reset">Clear</Button>
                        <Button type="submit">Calculate</Button>
                    </div>
                </CardFooter>
            </form>
        </Card>
    )


    function handleInputChange(index: number, value: string) {
        const newValues = values;
        newValues[index] = value;
        setValues([...newValues]);
    }

    function handleShortcuts(ev: KeyboardEvent) {
        if (ev.key === 'q' && ev.ctrlKey) clear();
    }

    function calculate(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault();

        switch (size) {
            case 2:
                setResult(calculate2X2(parseValues(values)).toString());
                break;
            case 3:
                setResult(calculate3X3(parseValues(values)).toString());
                break;
            case 4:
                setResult(calculate4X4(parseValues(values)).toString());
                break;
            default:
                break;
        };
    }

    function clear() {
        setValues(Array.from({ length: size * size }, () => ''));
        setResult('');
    }

    function parseValues(values: string[]) {
        return values.map((value) => Math.round(Number(value)));
    }
}