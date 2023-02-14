import { ComponentHarness } from "@angular/cdk/testing";

export class ToggleHarnees extends ComponentHarness {
    static hostSelector = `my-toggle`;

    protected getTriggerElement = this.locatorFor('button');
    protected getContentElement = this.locatorForOptional('.my-toggle-content');

    async Toggle() {
        return await (await this.getTriggerElement()).click();
    }

    async isOpen() {
        const content = await this.getContentElement();
        return !!content;
    }
}