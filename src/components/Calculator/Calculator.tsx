import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { MatrixTab } from "./MatrixTab"

export function Calculator() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Matrix Determinant Calculator</h1>
      <Tabs defaultValue="4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="4">4x4</TabsTrigger>
          <TabsTrigger value="3">3x3</TabsTrigger>
          <TabsTrigger value="2">2x2</TabsTrigger>
        </TabsList>
        <TabsContent value="4">
          <MatrixTab size={4} />
        </TabsContent>
        <TabsContent value="3">
          <MatrixTab size={3} />
        </TabsContent>
        <TabsContent value="2">
          <MatrixTab size={2} />
        </TabsContent>
      </Tabs>
    </div>
  )
}