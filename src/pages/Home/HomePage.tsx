import { FC } from "react";
import MainLayout from "@/layout/MainLayout";
import PageLayout from "@/layout/PageLayout";
import HomeCard from "@/components/Home/HomeCard";
import SaleProfitChart from "@/components/Home/SaleProfitChart";
import UsersTable from "@/components/Home/UsersTable";
import DeadlinesTable from "@/components/Home/DeadlinesTable";
import NotificationsPanel from "@/components/Home/NotificationsPanel";

const HomePage: FC = () => {
  return (
    <>
      <MainLayout>
        <PageLayout title="Dashboard">
          <div className="mb-[24px]">
            <HomeCard current={6} goal={7} />
          </div>
          <section className="mb-[24px]">
            <SaleProfitChart />
          </section>
          <section className="mb-[24px]">
            <NotificationsPanel />
          </section>
          <section className="mb-[24px]">
            <DeadlinesTable />
          </section>
          <section className="mb-[24px]">
            <UsersTable />
          </section>
        </PageLayout>
      </MainLayout>
    </>
  );
};

export default HomePage;
