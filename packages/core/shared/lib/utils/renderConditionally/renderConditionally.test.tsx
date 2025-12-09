import { renderConditionally } from './renderConditionally.js';

describe('renderConditionally', () => {
    it('should render the truthy component when the condition is true', () => {
        const condition = true;
        const truthy = <div>Truthy</div>;
        const falsy = <div>Falsy</div>;
        const result = renderConditionally(condition, truthy, falsy);
        expect(result).toEqual(truthy);
    });
    it('should render the falsy component when the condition is false', () => {
        const condition = false;
        const truthy = <div>Truthy</div>;
        const falsy = <div>Falsy</div>;
        const result = renderConditionally(condition, truthy, falsy);
        expect(result).toEqual(falsy);
    });
    it('should render null when the condition is false and no falsy component is provided', () => {
        const condition = false;
        const truthy = <div>Truthy</div>;
        const result = renderConditionally(condition, truthy);
        expect(result).toBeNull();
    });
});