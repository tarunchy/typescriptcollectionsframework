import { JIterator } from "./JIterator";
import { Hashable } from "./Hashable";
import { HashMapIteratorLocationTracker } from "./HashMap";
import { ImmutableCollection } from "./ImmutableCollection";
import { ImmutableSet } from "./ImmutableSet";
import { JSet } from "./JSet";
export declare class HashSet<K> implements JSet<K> {
    private initialElements;
    private iInitialCapacity;
    private iLoadFactor;
    private datastore;
    private hashMethods;
    constructor(iHash?: Hashable<K>, initialElements?: ImmutableCollection<K>, iInitialCapacity?: number, iLoadFactor?: number);
    /**
    * Returns the Hashable
    * @return {Hashable}
    */
    getHashable(): Hashable<K>;
    /**
    * Adds the specified element to this set if it is not already present.
    * @param {K} element element to be added to this set
    * @return {boolean} true if this set did not already contain the specified element
    */
    add(element: K): boolean;
    /**
    * RemoveElement the specified element from this set if it is present.
    * @param {K} element element to be removed from this set
    * @return {boolean} true if the set contained the specified element
    */
    remove(element: K): boolean;
    /**
    * Returns the number of elements in this set (its cardinality).
    * @return {number} the number of elements in this set (its cardinality)
    */
    size(): number;
    /**
    * Returns true if this set contains no elements.
    * @return {boolean} true if this set contains no elements
    */
    isEmpty(): boolean;
    /**
    * Returns true if this set contains the specified element.   This method uses the comparator and does not invoke equals
    * @param {K} item object to be checked for containment in this set
    * @return {boolean} true if this set contains the specified element
    */
    contains(item: K): boolean;
    /**
    * Removes all of the elements from this set. The set will be empty after this call returns.
    */
    clear(): void;
    /**
     * This method is deprecated and will be removed in a future revision.
     * @deprecated
     */
    deprecatedGetFirstEntryForIterator(): HashMapIteratorLocationTracker<K, number>;
    /**
     * This method is deprecated and will be removed in a future revision.
     * @deprecated
     */
    deprecatedGetNextEntryForIterator(current: HashMapIteratorLocationTracker<K, number>): HashMapIteratorLocationTracker<K, number>;
    /**
     * Returns a Java style iterator
     * @return {JIterator<K>} the Java style iterator
     */
    iterator(): JIterator<K>;
    /**
    * Returns a TypeScript style iterator
    * @return {Iterator<K>} the TypeScript style iterator
    */
    [Symbol.iterator](): Iterator<K>;
    /**
    * Returns an ImmutableCollection backed by this Collection
    */
    immutableCollection(): ImmutableCollection<K>;
    /**
    * Returns an ImmutableSet backed by this Set
    */
    immutableSet(): ImmutableSet<K>;
}
export declare class HashSetJIterator<T> implements JIterator<T> {
    private location;
    private set;
    constructor(iSet: HashSet<T>);
    hasNext(): boolean;
    next(): T;
}
export declare class HashSetIterator<T> implements Iterator<T> {
    private location;
    private set;
    constructor(iSet: HashSet<T>);
    next(value?: any): IteratorResult<T>;
}
