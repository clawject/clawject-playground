import { Bean, ClawjectApplication } from "@clawject/di";

class Foo {
    constructor(private bar: Bar) {}
}
class Bar {
    constructor(private foo: Foo) {}
}

@ClawjectApplication
class ApplicationContext {
    foo = Bean(Foo);
    bar = Bean(Bar);
}