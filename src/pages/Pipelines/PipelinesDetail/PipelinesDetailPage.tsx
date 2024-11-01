// import { Button } from "@/components/ui/button";
import MainLayout from "@/layout/MainLayout";
import PageLayout from "@/layout/PageLayout";
// import { Plus } from "lucide-react";
import { FC } from "react";
import { useParams } from "react-router-dom";
// import useRenderAvatar from "@/utils/ui/useRenderAvatars";
import KanbanBoard from "@/components/Pipelines/KanbanBoard/KanbanBoard";

const PipelinesDetailPage: FC = () => {
  const { companyName } = useParams<{ companyName: string }>();
  return (
    <>
      <MainLayout>
        <PageLayout title={companyName ?? "Company Details"}>
          {/* <section>
            <div className="float-right flex gap-4">
              {useRenderAvatar([
                { name: "John Doe", image: "https://github.com/shadcn.png" },
                { name: "Alex", image: "https://github.com/shadcn.png" },
                { name: "John Doe", image: "https://github.com/shadcn.png" },
                { name: "Alex", image: "https://github.com/shadcn.png" },
                { name: "John Doe", image: "https://github.com/shadcn.png" },
                { name: "Alex", image: "https://github.com/shadcn.png" },
                { name: "John Doe", image: "https://github.com/shadcn.png" },
                { name: "Alex", image: "https://github.com/shadcn.png" },
              ])}
              <Button>
                <Plus /> Add member
              </Button>
            </div>
          </section> */}
          <section>
            <KanbanBoard />
          </section>
        </PageLayout>
      </MainLayout>
    </>
  );
};

export default PipelinesDetailPage;
