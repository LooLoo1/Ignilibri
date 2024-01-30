import { Button, ImportTest as ImportTest2 } from "viburnum-ui"
import { Button as ImportTest } from "viburnum-ui/src/ImportTest/Button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button />
      <ImportTest />
      <ImportTest2 />
    </main>
  )
}
