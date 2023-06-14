const schema = [
    {
        type: 'text',
        value: '',
        errMsg: 'This Field is required',
        label: 'First Name',
        name: "first name",
        validator: (val: string): boolean => val.length > 5,
        required: true
    },
    {
        type: 'text',
        value: '',
        errMsg: 'This Field is required',
        label: 'Sur Name',
        name: "sur name",
        validator: (val: string): boolean => val.length > 5,
        required: false,
    },
    {
        type: 'number',
        value: '',
        errMsg: 'Age Between 18 to 120 is required',
        label: 'Age',
        name: "age",
        validator: (val: number): boolean => val > 18 && val < 120,
        required: true,
    },
    {
        type: 'e-mail',
        value: '',
        errMsg: 'Enter Valid E-mail Address',
        label: 'E-mail',
        name: 'email',
        validator: (val: string): boolean => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)),
        required: true,
    },

]