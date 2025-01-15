interface ICombineData<Parent, Child> {
  parentData: Parent[];
  childData: Child[];
  childKey: keyof Child;
  parentKey: string;
}

export const combineData = <
  Parent extends {
    ID: any;
  },
  Child
>({
  parentData,
  childData,
  childKey,
  parentKey,
}: ICombineData<Parent, Child>) =>
  parentData.map((parentItem) => {
    const childList = childData.filter(
      (childItem) => childItem[childKey] === parentItem.ID
    );

    return {
      ...parentItem,
      [`${parentKey}`]: childList,
    };
  });
