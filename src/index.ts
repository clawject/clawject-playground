import { Bean, ClawjectApplication } from "@clawject/di";

@ClawjectApplication
class ApplicationContext {
    @Bean data(
        n: number
    ) {
        return 123;
    }
}