import useCart from "@/common/hooks/useCart";
import { DeleteOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Space, Table, Typography } from "antd";

const { Title } = Typography;

const CartPage = () => {
    const { data, handleQuantityChange, calculateTotal, mutate } = useCart();

    // Xóa biến handleQuantityChange đã được khai báo trước đó

    const columns = [
        {
            title: "#",
            dataIndex: "index",
            key: "index",
        },
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Số lượng",
            dataIndex: "quantity",
            key: "quantity",
            render: (text: any, record: any) => (
                <Space>
                    <Button
                        icon={<UpOutlined />}
                        onClick={() =>
                            mutate({
                                action: "INCREMENT",
                                productId: record.productId,
                            })
                        }
                    />
                    <input
                        type="number"
                        min={1}
                        value={text}
                        onChange={(e) =>
                            handleQuantityChange(
                                record.productId,
                                e.target.value,
                            )
                        }
                    />
                    <Button
                        icon={<DownOutlined />}
                        onClick={() =>
                            mutate({
                                action: "DECREMENT",
                                productId: record.productId,
                            })
                        }
                    />
                </Space>
            ),
        },
        {
            title: "Tổng giá",
            dataIndex: "total",
            key: "total",
        },
        {
            title: "Hành động",
            key: "action",
            render: (text: any, record: any) => (
                <Button
                    icon={<DeleteOutlined />}
                    onClick={() =>
                        mutate({
                            action: "REMOVE",
                            productId: record.productId,
                        })
                    }
                >
                    Xóa
                </Button>
            ),
        },
    ];

    const dataSource = data?.products.map((product: any, index: number) => ({
        key: index,
        index: index + 1,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        total: product.price * product.quantity,
        productId: product.productId,
    }));

    return (
        <div className="container">
            <Title level={2}>Giỏ hàng</Title>
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
            />
            <Title level={4}>Tổng cộng: ${calculateTotal()}</Title>
        </div>
    );
};

export default CartPage;
