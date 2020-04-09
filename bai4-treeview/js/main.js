let staffList =
    [
        {
            id: "dcd906f0-e3bc-4783-93b4-8438b0d82248",
            children: [
                {
                    id: "cc761953-869f-4cd7-8539-5cae8d480ac5",
                    children: [
                        {
                            id: "6e996396-a928-4dfe-92db-bfca32f5cabc",
                            children: [

                            ],
                            count: 33,
                            label: "Planning Team"
                        },
                        {
                            id: "0e2a3446-fe3e-46bb-8834-55c675427610",
                            children: [

                            ],
                            count: 37,
                            label: "Development Headquaters"
                        }
                    ],
                    count: 41,
                    label: "Lineus VN"
                },
                {
                    id: "b2baedae-79f0-4779-a6a8-081b744d5386",
                    children: [
                        {
                            id: "05b81c0c-49e3-4365-a62f-f0d37a92dbc3",
                            children: [
                                {
                                    id: "711acc36-79b9-4471-a0ab-cc0bdfe296ca",
                                    children: [

                                    ],
                                    count: 1,
                                    label: "Planning Team"
                                }
                            ],
                            count: 2,
                            label: "Business headquaters"
                        },
                        {
                            id: "b4862d8c-3d6b-40c5-a310-146e6848da5e",
                            children: [

                            ],
                            count: 25,
                            label: "Technology Research"
                        },
                        {
                            id: "3efa5187-123f-4d6b-b1a3-5e4aa35c33e9",
                            children: [

                            ],
                            count: 18,
                            label: "Management Support Team"
                        },
                        {
                            id: "4d5327b0-b01d-4b5d-af08-2c2b4c2f3f0f",
                            children: [
                                {
                                    id: "75eef76a-1367-44ad-8afb-e8eb047cbb6a",
                                    children: [

                                    ],
                                    count: 8,
                                    label: "Development Team"
                                }
                            ],
                            count: 13,
                            label: "Development Headquaters"
                        }
                    ],
                    count: 28,
                    label: "Lineus Korea"
                }
            ],
            count: 51,
            label: "Lineus"
        }
    ];

function struct(array) {
    let str = '';
    array.forEach(e => {
        if (e.children) {
            e.children.forEach(e1 => {
                str += e.label + "->" + e1.label
                struct(e.children)
            })
        }
    })
    console.log(str)
}
struct(staffList)

