import { Collection } from "./Collection";
import { ImmutableCollection } from "./ImmutableCollection";
import { ImmutableList } from "./ImmutableList";
export interface List<T> extends ImmutableList<T>, Collection<T> {
    /**
    * Replaces the element at the specified position in this list with the specified element (optional operation).
    * @param {number} index index of the element to replace
    * @param {T} element element to be stored at the specified position
    * @return {T} the element previously at the specified position
    */
    set(index: number, element: T): T;
    /**
    * Removes the element at the specified position in this list. Shifts any subsequent elements to the left (subtracts one from their indices).
    * @param {number} index the index of the element to be removed
    * @return {T} the element that was removed from the list, undefined if the element does not exist
    */
    removeIndex(index: number): T;
    /**
    * Appends the specified element to the end of this list
    * @param {T} t element to Append
    * @return {boolean} true if this collection changed as a result of the call
    */
    add(t: T): boolean;
    /**
    * Inserts the specified element at the specified position in this list. Shifts the element currently at that position (if any) and any subsequent elements to the right (adds one to their indices).
    * @param {number} index index at which the specified element is to be inserted
    * @param {T} t element to be inserted
    */
    addIndex(index: number, t: T): void;
    /**
    * Inserts all of the elements in the specified collection into this list, starting at the specified position. Shifts the element currently at that position (if any) and any subsequent elements to the right (increases their indices). The new elements will appear in the list in the order that they are returned by the specified collection's iterator.
    * @param {number} index index at which to insert the first element from the specified collection
    * @param {Collection} c collection containing elements to be added to this list
    * @return {boolean} true if this collection changed as a result of the call
    */
    addAll(c: ImmutableCollection<T>, index?: number): boolean;
    /**
    * Removes all of the elements from this list. The list will be empty after this call returns.
    */
    clear(): void;
    /**
    * Removes from this list all of its elements that are contained in the specified collection.
    * @param {Collection} c collection containing elements to be removed from this list
    * @return {boolean} true if this list changed as a result of the call
    */
    removeAll(c: ImmutableCollection<T>): boolean;
    /**
    * Returns an ImmutableList backed by this List
    */
    immutableList(): ImmutableList<T>;
}
