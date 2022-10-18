(()=>{
    interface Product{
        id: number;
        name: string;
    }

    class ProductService {
        getProduct(id: number){
            console.log(id);
        }

        saveProduct(product: Product){
            console.log(product);
        }
    }

    class Mailer {
        private masterEmail: string = "tert@gmail.com";
        
        sendEmail(emails: string[], template: "to-clients" | "to-admins"){
            console.log(emails);
            console.log(template);
        }
    }

    class ProductBLock{
        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer){
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct(id: number){
            this.productService.getProduct(id);
        }

        saveProduct(product: Product){
            this.productService.saveProduct(product);
        }

        notifyClients(){
            this.mailer.sendEmail(["test@gmail.com"], "to-clients");
        }

    }

    class CartBlock{
        private items: Object[] = [];

        addToCard(productId: number){
            console.log(productId);
        }

    }

    const productService = new ProductService();
    const mailer = new Mailer();
    const productBLock = new ProductBLock(productService, mailer);
    const cartBlock = new CartBlock();

    productBLock.loadProduct(19);
    productBLock.saveProduct({id: 10, name: "Test"});
    productBLock.notifyClients();
    cartBlock.addToCard(19);

})()