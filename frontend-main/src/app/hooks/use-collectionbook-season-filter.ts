// src/app/hooks/useItemFilter.ts
// 아이템 필터링하여 조회하는 커스텀훅
import { useMemo } from "react";
import { CollectionbookItem } from "@/app/apis/collectionbook-api";

export const useCollectionbookSeasonFilter = (
  items: CollectionbookItem[],
  selectedCategory: string,
  currentPage: number,
  itemsPerPage: number,
) => {
  const filteredItems = useMemo(() => {
    return items.filter((item) => item.item.season === selectedCategory);
  }, [items, selectedCategory]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredItems, currentPage]);

  return { currentItems, totalPages };
};
