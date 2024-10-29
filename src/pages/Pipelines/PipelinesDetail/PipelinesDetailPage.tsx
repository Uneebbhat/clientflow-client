import MainLayout from "@/layout/MainLayout";
import PageLayout from "@/layout/PageLayout";
import { FC } from "react";
import { useParams } from "react-router-dom";

const PipelinesDetailPage: FC = () => {
  const { companyName } = useParams<{ companyName: string }>();
  return (
    <>
      <MainLayout>
        <PageLayout title={companyName ?? "Company Details"}>
          <h1>PipelinesDetailPage</h1>
        </PageLayout>
      </MainLayout>
    </>
  );
};

export default PipelinesDetailPage;
