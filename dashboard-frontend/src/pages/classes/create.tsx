import { CreateView } from "@/components/refine-ui/views/create-view.tsx";
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useBack } from "@refinedev/core";

export const Create = () => {
  return (
    <CreateView className="class-view">
        <Breadcrumb />

        <h1 className="page-title">Create a class</h1>

        <div className="intro-row">
            <p>Provide the required information below to add a class.</p>
            <Button onClick={ useBack }>Go Back</Button>
        </div>
    </CreateView>
  )
}

export default Create