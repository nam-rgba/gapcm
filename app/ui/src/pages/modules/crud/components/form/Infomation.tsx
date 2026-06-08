import { Button, Form, Input } from "antd";
import { useModule } from "../../store/module.store";
import type { Module } from "../../../../../types/module.type";
import { useAppNavigate } from "../../../../../utils/navigate";

type InformationForm = Omit<Module, "id">;

export const Information = () => {
  const [form] = Form.useForm<InformationForm>();
  const { relNavigate } = useAppNavigate();

  const { setBasicInfo } = useModule();

  const submitModuleInfo = async () => {
    await form.validateFields();
    const values = form.getFieldsValue(

    );
    setBasicInfo(values);
    relNavigate("module-field");
  };

  return (
    <div className="p-4">
      <h3 className="text-left">Your module basic information</h3>

      <Form form={form} layout="vertical" variant="underlined">
        <Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input the name of the module!",
              },
            ]}
          >
            <Input placeholder="Name of the module" />
          </Form.Item>

          <Form.Item label="Database Name" name="databaseName"  rules={[
              {
                required: true,
                message: "Please input the name of the table!",
              },
            ]}>
            <Input placeholder="Name of table in the database" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea placeholder="Description of the module" />
          </Form.Item>

          <div className="w-full flex justify-end">
            <Button type="primary" onClick={submitModuleInfo}>
              Next
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
