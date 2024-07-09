'use client';

import { useState, useMemo } from 'react'; import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
} from '@nextui-org/react';

export default function App() {
    const [selectedKeys, setSelectedKeys] = useState<any>(new Set(["stacy"]));

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <div className='flex justify-center'>
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        variant="bordered"
                        className="capitalize"
                    >
                        {selectedValue}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                >
                    <DropdownItem key="stacy">stacy</DropdownItem>
                    <DropdownItem key="tripleS">tripleS</DropdownItem>
                    <DropdownItem key="newJeans">NewJeans</DropdownItem>
                    <DropdownItem key="IVE">IVE</DropdownItem>
                    <DropdownItem key="kissofLife">kissofLife</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
