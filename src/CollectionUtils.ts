/**
 * @license
 * Copyright Larry Diamond 2017 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/larrydiamond/typescriptcollectionsframework/LICENSE
 */

import {ArrayList} from "./ArrayList";
import {Collectable} from "./Collectable";
import {Comparator} from "./Comparator";
import {Hashable} from "./Hashable";
import {ImmutableCollection} from "./ImmutableCollection";
import {ImmutableList} from "./ImmutableList";
import {JIterator} from "./JIterator";

export class CollectionUtils {

  public static getStringComparator():Comparator<string> {
    let sortString:Comparator<string> = {
      compare(o1:string, o2:string) : number {
        if (o1 === o2)
          return 0;
        if (o1 === undefined)
          return -1;
        if (o1 === null)
          return -1;
        if (o2 === undefined)
          return 1;
        if (o2 === null)
          return 1;
        if (o1 < o2)
          return -1;

        return 1;
      }
    }

    return sortString;
  }

  public static getNumberComparator():Comparator<number> {
    let sortNumber:Comparator<number> = {
      compare(o1:number, o2:number) : number {
        if (o1 === o2)
          return 0;
        if (o1 === undefined)
          return -1;
        if (o1 === null)
          return -1;
        if (o2 === undefined)
          return 1;
        if (o2 === null)
          return 1;
        if (o1 < o2)
          return -1;

        return 1;
      }
    }
    return sortNumber;
  }

  public getHashCodeForString (o:string) : number {
    if (o === undefined) {
      return 0;
    }
    if (o === null) {
      return 0;
    }
    let tmp:string = JSON.stringify (o);
    let hash: number = 0;
    for (let loop = 0; loop < tmp.length; loop++) {
      let n:number = tmp.charCodeAt (loop);
      hash = ((hash * 256) + n) % 1000000000;
    }
    return hash;
  }

  public getHashCodeForStrings (o:ImmutableCollection<string>) : number {
    if (o === undefined) {
      return 0;
    }
    if (o === null) {
      return 0;
    }
    let tmp:number = 0;
    for (let iter:JIterator<string> = o.iterator(); iter.hasNext(); ) {
      let ostr:string = iter.next();
      tmp = ((tmp * 256) + this.getHashCodeForString (ostr)) % 1000000000;
    }
    return tmp;
  }

  public getHashCodeForNumber (o:number) : number {
    if (o === undefined) {
      return 0;
    }
    if (o === null) {
      return 0;
    }

    let tmp:number = o;
    while ((tmp < 1000000000) && (Math.floor (tmp) !== tmp)) {
      tmp = tmp * 10;
    }

    return tmp;
  }

  public stringList (... values : string []) : ImmutableList<string> {
    let list : ArrayList<string> = new ArrayList<string>(new GenericCollectable<string>());
    for (let loop : number = 0; loop < values.length; loop++) {
      let tmp : string = values [loop];
      list.add (tmp);
    }
    return list.immutableList();
  }

  public numberList (... values : number []) : ImmutableList<number> {
    let list : ArrayList<number> = new ArrayList<number>(new GenericCollectable<number>());
    for (let loop : number = 0; loop < values.length; loop++) {
      let tmp : number = values [loop];
      list.add (tmp);
    }
    return list.immutableList();
  }




}

export class GenericCollectable<T> implements Collectable<T> {
  equals (o1: T, o2: T) {
    if (o1 === undefined) {
      if (o2 === undefined) {
        return true;
      } else {
        return false;
      }
    }
    if (o1 === null) {
      if (o2 === null) {
        return true;
      } else {
        return false;
      }
    }
    if ((o2 === null) || (o2 === undefined)) {
      return false;
    }

    if (JSON.stringify(o1) === JSON.stringify(o2))
      return true;
    return false;
  }
}

export class GenericHashable<T> implements Hashable<T> {
  equals (o1: T, o2: T) : boolean {
    if (o1 === undefined) {
      if (o2 === undefined) {
        return true;
      } else {
        return false;
      }
    }
    if (o1 === null) {
      if (o2 === null) {
        return true;
      } else {
        return false;
      }
    }
    if ((o2 === null) || (o2 === undefined)) {
      return false;
    }

    if (JSON.stringify(o1) === JSON.stringify(o2))
      return true;
    return false;
  };
  hashCode (o:T) : number {
    if (o === undefined) {
      return 0;
    }
    if (o === null) {
      return 0;
    }
    let tmp:string = JSON.stringify (o);
    let hash: number = 0;
    for (let loop = 0; loop < tmp.length; loop++) {
      let n:number = tmp.charCodeAt (loop);
      hash = ((hash * 256) + n) % 1000000000;
    }
    return hash;
  };
}
