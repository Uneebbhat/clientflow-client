import { FC } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const EditCompanyModal: FC = () => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <Card className="w-[500px] max-w-full mx-4 h-[80vh] overflow-scroll">
          <CardHeader>
            <CardTitle>Edit Company</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default EditCompanyModal;
