export interface ISchema {
    type: string
    value: string | null,
    errMsg: string,
    label: string | null,
    name: string,
    required: boolean,
    className?: string,
    validator: (val: unknown) => unknown,
}

export type ISchemaTypes = 'text' | 'number' | 'e-mail'