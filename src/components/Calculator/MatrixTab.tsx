import { useState } from "react"

import { calculate2X2, calculate3X3 } from "@/lib/calculator";

import { MatrixInput } from "./MatrixInput"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"


export function MatrixTab({ size }: { size: number }) {
    const [values, setValues] = useState<number[]>([]);
    const [result, setResult] = useState('');

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
                        <Button type="submit">Calculate</Button>
                        <Button onClick={clear} variant='secondary' type="reset">Clear</Button>
                    </div>
                </CardFooter>
            </form>
        </Card>
    )


    function handleInputChange(index: number, value: string) {
        const newValues = values;
        newValues[index] = Math.round(Number(value));
        setValues([...newValues]);
    }

    function calculate(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault();

        console.log(`Calculating ${size}x${size} determinant:`, values);

        switch (size) {
            case 2:
                setResult(calculate2X2(values).toString());
                break;
            case 3:
                calculate3X3(values);
                break;
            case 4:
                break;
            default:
                break;
        };
    }

    function clear() {
        setValues([]);
        setResult('');
    }
}