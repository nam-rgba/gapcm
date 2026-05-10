import { Button, Form, Input } from "antd"

interface InfomationProps {

}

interface InformationForm {
  name: string;
  description?: string;
}

export const Information = (props: InfomationProps) => {

  const [form ] = Form.useForm<InformationForm>()

    const {} = props

    

  return (
    <div className="p-4">


      <h3 className="text-left">Your module basic information</h3>

    <Form form={form} layout="vertical" >

      <Form.Item  >
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input the name of the module!' }]}>
          <Input placeholder="Name of the module" />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea placeholder="Description of the module" />
        </Form.Item>

        <Button type="primary" onClick={() => form.submit()}>Submit</Button>

      </Form.Item>

    </Form>
    </div>
  )
}
