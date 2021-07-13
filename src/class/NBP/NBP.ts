import { Rate, NBPObject } from './result'

export default class NBP {
  private _type: string;
  
  /**
   * Wartości stałe na które są przeliczane
   */
  private _output: Rate[];
  /**
   * Wartości stałe na które są przeliczane
   */
  public get output(): Rate[] {
    return this._output;
  }
  
  /**
   * Wartości przeliczone
   */
  private _input: Rate[];
  /**
   * Wartości przeliczone
   */
  public get input(): Rate[] {
    return this._input;
  }
  

  constructor( typeTable: string ) {
    this._type = typeTable;
    this._output = [];
    this._input = [];
  }
  async getTable( count: number ) {
    try {
      const result = await fetch( `http://api.nbp.pl/api/exchangerates/tables/${this._type}`, {
        headers: {
          'Accept': 'application/json'
        }
      } ).then<NBPObject[], never>( res => res.json() );
      result[0].rates.map( v => {
        if( v.code === 'USD' || v.code === 'JPY' )
          this._output.push( v );
      } );
      this._output.push( {
        code: 'PLN',
        currency: 'polski złoty',
        mid: 1
      } );
      for( let i = 0; i < count; i++ )
        this._input.push( result[0].rates[this.random( 0, result[0].rates.length - 1 )] );
      return this._input;
    } catch( e ) {
      throw new Error( e.message );
    }
  }

  private random( min: number, max: number ) {
    return Math.floor( Math.random() * (max - min) ) + min;
  }
}