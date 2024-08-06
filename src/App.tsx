import { useState } from "react";

import "./App.css";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Card className="w-[350px] m-12">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex ite">
          <h1 className="text-xl text-red-400">Vite + React</h1>
          <div className="card ">
            <Button
              variant={"destructive"}
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default App;
