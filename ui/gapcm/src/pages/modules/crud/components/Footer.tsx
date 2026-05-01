import { Button } from "antd";

interface FooterProps {
  onNext: () => void;
  onPrev: () => void;
  okText: string;
  cancelText: string;
}

export const Footer = (props: FooterProps) => {
  const { onNext, onPrev, okText, cancelText } = props;
  return (
    <div className="w-full flex items-center justify-end gap-4">
      <Button  type="default" onClick={onPrev}>
        {cancelText}
      </Button>
      <Button type="primary" onClick={onNext}>
        {okText}
      </Button>
    </div>
  );
};
