export type Key = string | number
export interface Tab {
    tab:string
    key:Key
}

export type Tabs = Array<Tab>

// export type TabsGroup = Array<Tabs>

export interface TabsGroup {
    name:string
    tabs:Tabs
}

export type ITabsGroups = Array<TabsGroup>