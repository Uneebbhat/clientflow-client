import ShowComapnies from "@/components/Pipelines/ShowComapnies";
import MainLayout from "@/layout/MainLayout";
import PageLayout from "@/layout/PageLayout";
import { FC } from "react";

const PipelinesPage: FC = () => {
  return (
    <>
      <MainLayout>
        <PageLayout title="Pipelines">
          <section>
            <ShowComapnies />
          </section>
        </PageLayout>
      </MainLayout>
    </>
  );
};

export default PipelinesPage;
