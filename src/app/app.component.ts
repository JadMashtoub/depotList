import { Component } from '@angular/core';

interface Item {
  name: string;
  zone: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Item[] = [
    { name: 'ALBANVALE', zone: 'ZONE 1' },
    { name: 'KURUNJANG', zone: 'ZONE 1' },
    { name: 'ALBION', zone: 'ZONE 1' },
    { name: 'LAVERTON NORTH', zone: 'ZONE 1' },
    { name: 'ARDEER', zone: 'ZONE 1' },
    { name: 'MELTON', zone: 'ZONE 1' },
    { name: 'BRAYBROOK', zone: 'ZONE 1' },
    { name: 'MELTON SOUTH', zone: 'ZONE 1' },
    { name: 'BROOKFIELD', zone: 'ZONE 1' },
    { name: 'MELTON WEST', zone: 'ZONE 1' },
    { name: 'BURNSIDE', zone: 'ZONE 1' },
    { name: 'RAVENHALL', zone: 'ZONE 1' },
    { name: 'BURNSIDE HEIGHTS', zone: 'ZONE 1' },
    { name: 'ST ALBANS', zone: 'ZONE 1' },
    { name: 'CAIRNLEA', zone: 'ZONE 1' },
    { name: 'SUNSHINE', zone: 'ZONE 1' },
    { name: 'CAROLINE SPRINGS', zone: 'ZONE 1' },
    { name: 'SUNSHINE NORTH', zone: 'ZONE 1' },
    { name: 'COBBLEBANK', zone: 'ZONE 1' },
    { name: 'SUNSHINE WEST', zone: 'ZONE 1' },
    { name: 'DEER PARK', zone: 'ZONE 1' },
    { name: 'TAYLORS HILL', zone: 'ZONE 1' },
    { name: 'DERRIMUT', zone: 'ZONE 1' },
    { name: 'TOTTENHAM', zone: 'ZONE 1' },
    { name: 'GLENGALA', zone: 'ZONE 1' },
    { name: 'TRUGANINA', zone: 'ZONE 1' },
    { name: 'HARKNESS', zone: 'ZONE 1' },
    { name: 'WEIR VIEWS', zone: 'ZONE 1' },
    { name: 'KEALBA', zone: 'ZONE 1' },
    { name: 'KEILOR', zone: 'ZONE 1' },
    { name: 'ALTONA', zone: 'ZONE 2' },
    { name: 'SEABROOK', zone: 'ZONE 2' },
    { name: 'ALTONA MEADOWS', zone: 'ZONE 2' },
    { name: 'SEAHOLME', zone: 'ZONE 2' },
    { name: 'ALTONA NORTH', zone: 'ZONE 2' },
    { name: 'SEDDON', zone: 'ZONE 2' },
    { name: 'AVONDALE HEIGHTS', zone: 'ZONE 2' },
    { name: 'SOUTH KINGSVILLE', zone: 'ZONE 2' },
    { name: 'BROOKLYN', zone: 'ZONE 2' },
    { name: 'SPOSTWOOD', zone: 'ZONE 2' },
    { name: 'FOOTSCRAY', zone: 'ZONE 2' },
    { name: 'TARNEIT', zone: 'ZONE 2' },
    { name: 'FOOTSCRAY WEST', zone: 'ZONE 2' },
    { name: 'WERRIBEE', zone: 'ZONE 2' },
    { name: 'HIGHPOINT S/C', zone: 'ZONE 2' },
    { name: 'WESTONA', zone: 'ZONE 2' },
    { name: 'HOPPERS CROSSING', zone: 'ZONE 2' },
    { name: 'WILLIAMS LANDING', zone: 'ZONE 2' },
    { name: 'KEILOR EAST', zone: 'ZONE 2' },
    { name: 'WILLIAMS RAAF', zone: 'ZONE 2' },
    { name: 'KINGSVILLE', zone: 'ZONE 2' },
    { name: 'WILLIAMSTOWN', zone: 'ZONE 2' },
    { name: 'LAVERTON', zone: 'ZONE 2' },
    { name: 'WILLIAMSTOWN NTH', zone: 'ZONE 2' },
    { name: 'LAVERTON RAAF', zone: 'ZONE 2' },
    { name: 'YARRAVILLE', zone: 'ZONE 2' },
    { name: 'MAIDSTONE', zone: 'ZONE 2' },
    { name: 'YARRAVILLE WEST', zone: 'ZONE 2' },
    { name: 'MARIBYRNONG', zone: 'ZONE 2' },
    { name: 'NEWPORT', zone: 'ZONE 2' },
    { name: 'ANTREE', zone: 'ZONE 3' },
{ name: 'ATTWOOD', zone: 'ZONE 3' },
{ name: 'BONNIEBROOK', zone: 'ZONE 3' },
{ name: 'CALDER PARK', zone: 'ZONE 3' },
{ name: 'CRAIGIEBURN', zone: 'ZONE 3' },
{ name: 'DEANSIDE', zone: 'ZONE 3' },
{ name: 'DELAHEY', zone: 'ZONE 3' },
{ name: 'EYNESBURY', zone: 'ZONE 3' },
{ name: 'FRASER RISE', zone: 'ZONE 3' },
{ name: 'GREENVALE', zone: 'ZONE 3' },
{ name: 'HILLSIDE', zone: 'ZONE 3' },
{ name: 'KEILOR DOWNS', zone: 'ZONE 3' },
{ name: 'KEILOR LODGE', zone: 'ZONE 3' },
{ name: 'KEILOR NORTH', zone: 'ZONE 3' },
{ name: 'KINGS PARK', zone: 'ZONE 3' },
{ name: 'MAMBOURIN', zone: 'ZONE 3' },
{ name: 'MANOR LAKES', zone: 'ZONE 3' },
{ name: 'MEADOW HEIGHTS', zone: 'ZONE 3' },
{ name: 'PLUMPTON', zone: 'ZONE 3' },
{ name: 'ROCKBANK', zone: 'ZONE 3' },
{ name: 'ROXBURGH PARK', zone: 'ZONE 3' },
{ name: 'SYDENHAM', zone: 'ZONE 3' },
{ name: 'TAYLORS LAKES', zone: 'ZONE 3' },
{ name: 'THORNHILL PARK', zone: 'ZONE 3' },
{ name: 'WESTMEADOWS', zone: 'ZONE 3' },
{ name: 'WYNDHAM VALE', zone: 'ZONE 3' },
{ name: 'BACCHUS MARSH', zone: 'ZONE 3B' },
{ name: 'COIMADAI (part)', zone: 'ZONE 3B' },
{ name: 'DARLEY', zone: 'ZONE 3B' },
{ name: 'DIGGERS REST', zone: 'ZONE 3B' },
{ name: 'GISBORNE', zone: 'ZONE 3B' },
{ name: 'GISBORNE STH', zone: 'ZONE 3B' },
{ name: 'HOPETOUN PARK', zone: 'ZONE 3B' },
{ name: 'LONG FOREST', zone: 'ZONE 3B' },
{ name: 'MADDINGLEY', zone: 'ZONE 3B' },
{ name: 'MERRIMU', zone: 'ZONE 3B' },
{ name: 'MOUNT COTTRELL', zone: 'ZONE 3B' },
{ name: 'NEW GISBORNE', zone: 'ZONE 3B' },
{ name: 'PARWAN', zone: 'ZONE 3B' },
{ name: 'STRATHTULLOH', zone: 'ZONE 3B' },
{ name: 'SUNBURY', zone: 'ZONE 3B' },
{ name: 'TOOLERN VALE', zone: 'ZONE 3B' },
{ name: 'BUNDOORA', zone: 'ZONE 4' },
{ name: 'EPPING', zone: 'ZONE 4' },
{ name: 'KEON PARK', zone: 'ZONE 4' },
{ name: 'KINGSBURY', zone: 'ZONE 4' },
{ name: 'LALOR', zone: 'ZONE 4' },
{ name: 'LATROBE UNI', zone: 'ZONE 4' },
{ name: 'MILL PARK', zone: 'ZONE 4' },
{ name: 'PASCOE VALE', zone: 'ZONE 4' },
{ name: 'PASCOE VALE SOUTH', zone: 'ZONE 4' },
{ name: 'PRESTON', zone: 'ZONE 4' },
{ name: 'RESERVOIR', zone: 'ZONE 4' },
{ name: 'THOMASTOWN', zone: 'ZONE 4' },
{ name: 'ABERFELDIE', zone: 'ZONE 5' },
{ name: 'JACANA', zone: 'ZONE 5' },
{ name: 'AIRPORT WEST', zone: 'ZONE 5' },
{ name: 'LOWER PLENTY', zone: 'ZONE 5' },
{ name: 'BRIAR HILL', zone: 'ZONE 5' },
{ name: 'MACLEOD', zone: 'ZONE 5' },
{ name: 'BRUNSWICK ALL', zone: 'ZONE 5' },
{ name: 'MONTMORENCY', zone: 'ZONE 5' },
{ name: 'COBURG', zone: 'ZONE 5' },
{ name: 'MORELAND', zone: 'ZONE 5' },
{ name: 'COBURG NORTH', zone: 'ZONE 5' },
{ name: 'NIDDRIE', zone: 'ZONE 5' },
{ name: 'ELTHAM', zone: 'ZONE 5' },
{ name: 'OAK PARK', zone: 'ZONE 5' },
{ name: 'ELTHAM NORTH', zone: 'ZONE 5' },
{ name: 'PARKVILLE', zone: 'ZONE 5' },
{ name: 'ESSENDON', zone: 'ZONE 5' },
{ name: 'RESEARCH', zone: 'ZONE 5' },
{ name: 'FAWKNER', zone: 'ZONE 5' },
{ name: 'ROSANNA', zone: 'ZONE 5' },
{ name: 'FITZROY NORTH', zone: 'ZONE 5' },
{ name: 'ROYAL HOSPITAL', zone: 'ZONE 5' },
{ name: 'GLENROY', zone: 'ZONE 5' },
{ name: 'ST HELENA', zone: 'ZONE 5' },
{ name: 'GREENSBOROUGH', zone: 'ZONE 5' },
{ name: 'STRATHMORE', zone: 'ZONE 5' },
{ name: 'HADFIELD', zone: 'ZONE 5' },
{ name: 'VIEWBANK', zone: 'ZONE 5' },
{ name: 'HEIDELBERG', zone: 'ZONE 5' },
{ name: 'WATSONIA', zone: 'ZONE 5' },
{ name: 'HEIDELBERG WEST', zone: 'ZONE 5' },
{ name: 'YALLAMBIE', zone: 'ZONE 5' },
{ name: 'ABBOTSFORD', zone: 'ZONE 6' },
{ name: 'ARMADALE', zone: 'ZONE 6' },
{ name: 'CHADSTONE', zone: 'ZONE 6' },
{ name: 'CHADSTONE S/C', zone: 'ZONE 6' },
{ name: 'CLIFTON HILL', zone: 'ZONE 6' },
{ name: 'COLLINGWOOD', zone: 'ZONE 6' },
{ name: 'FITZROY', zone: 'ZONE 6' },
{ name: 'HAWKSBURN', zone: 'ZONE 6' },
{ name: 'KEW', zone: 'ZONE 6' },
{ name: 'KEW EAST', zone: 'ZONE 6' },
{ name: 'KOOYONG', zone: 'ZONE 6' },
{ name: 'MALVERN', zone: 'ZONE 6' },
{ name: 'MALVERN EAST', zone: 'ZONE 6' },
{ name: 'PRAHRAN', zone: 'ZONE 6' },
{ name: 'SOUTH MELBOURNE', zone: 'ZONE 6' },
{ name: 'SOUTH YARRA', zone: 'ZONE 6' },
{ name: 'TOORAK', zone: 'ZONE 6' },
{ name: 'WINDSOR', zone: 'ZONE 6' },
{ name: 'ALPHINGTON', zone: 'ZONE 7' },
{ name: 'AUBURN', zone: 'ZONE 7' },
{ name: 'BALWYN', zone: 'ZONE 7' },
{ name: 'BALWYN NORTH', zone: 'ZONE 7' },
{ name: 'BELLFIELD', zone: 'ZONE 7' },
{ name: 'BULLEEN', zone: 'ZONE 7' },
{ name: 'CAMBERWELL', zone: 'ZONE 7' },
{ name: 'CANTERBURY', zone: 'ZONE 7' },
{ name: 'DEEPDENE', zone: 'ZONE 7' },
{ name: 'EAGLEMONT', zone: 'ZONE 7' },
{ name: 'FAIRFIELD', zone: 'ZONE 7' },
{ name: 'GREYTHORN', zone: 'ZONE 7' },
{ name: 'HAWTHORN', zone: 'ZONE 7' },
{ name: 'HAWTHORN EAST', zone: 'ZONE 7' },
{ name: 'IVANHOE', zone: 'ZONE 7' },
{ name: 'IVANHOE EAST', zone: 'ZONE 7' },
{ name: 'MONT ALBERT', zone: 'ZONE 7' },
{ name: 'NORTHCOTE', zone: 'ZONE 7' },
{ name: 'SURREY HILLS', zone: 'ZONE 7' },
{ name: 'TEMPLESTOWE LOWER', zone: 'ZONE 7' },
{ name: 'ABBOTSFORD', zone: 'ZONE 8' },
{ name: 'BROADMEADOWS', zone: 'ZONE 8' },
{ name: 'CAMPBELLFIELD', zone: 'ZONE 8' },
{ name: 'CLIFTON HILL', zone: 'ZONE 8' },
{ name: 'COLLINGWOOD', zone: 'ZONE 8' },
{ name: 'DOCKLANDS', zone: 'ZONE 8' },
{ name: 'GLADSTONE PARK', zone: 'ZONE 8' },
{ name: 'GOWANBRAE', zone: 'ZONE 8' },
{ name: 'KEILOR PARK', zone: 'ZONE 8' },
{ name: 'MELBOURNE AIRPORT', zone: 'ZONE 8' },
{ name: 'MELBOURNE CD 3000', zone: 'ZONE 8' },
{ name: 'SOMERTON', zone: 'ZONE 8' },
{ name: 'TULLAMARINE', zone: 'ZONE 8' },
{ name: 'WORLD TRADE CENTRE', zone: 'ZONE 8' },
{ name: 'ALBERT PARK', zone: 'ZONE 9' },
{ name: 'KENSINGTON', zone: 'ZONE 9' },
{ name: 'ASCOT VALE', zone: 'ZONE 9' },
{ name: 'MIDDLE PARK', zone: 'ZONE 9' },
{ name: 'BURNLEY', zone: 'ZONE 9' },
{ name: 'MOONEE PONDS', zone: 'ZONE 9' },
{ name: 'CREMORNE', zone: 'ZONE 9' },
{ name: 'NORTH MELBOURNE', zone: 'ZONE 9' },
{ name: 'EAST MELBOURNE', zone: 'ZONE 9' },
{ name: 'PORT MELBOURNE', zone: 'ZONE 9' },
{ name: 'FISHERMANS BEND', zone: 'ZONE 9' },
{ name: 'RICHMOND', zone: 'ZONE 9' },
{ name: 'FLEMINGTON', zone: 'ZONE 9' },
{ name: 'SOUTHBANK', zone: 'ZONE 9' },
{ name: 'GARDEN CITY', zone: 'ZONE 9' },
{ name: 'TRAVANCORE', zone: 'ZONE 9' },
{ name: 'JOLIMONT', zone: 'ZONE 9' },
{ name: 'WEST MELBOURNE', zone: 'ZONE 9' },
{ name: 'BALACLAVA', zone: 'ZONE 10' },
{ name: 'HAMPTON EAST', zone: 'ZONE 10' },
{ name: 'BENTLEIGH', zone: 'ZONE 10' },
{ name: 'HIGHETT', zone: 'ZONE 10' },
{ name: 'BENTLEIGH EAST', zone: 'ZONE 10' },
{ name: 'MCKINNON', zone: 'ZONE 10' },
{ name: 'BRIGHTON', zone: 'ZONE 10' },
{ name: 'MELBOURNE 3004', zone: 'ZONE 10' },
{ name: 'BRIGHTON EAST', zone: 'ZONE 10' },
{ name: 'MOORABIN', zone: 'ZONE 10' },
{ name: 'CARNEGIE', zone: 'ZONE 10' },
{ name: 'MURRUMBEENA', zone: 'ZONE 10' },
{ name: 'CAULFIELD', zone: 'ZONE 10' },
{ name: 'ORMOND', zone: 'ZONE 10' },
{ name: 'CAULFIELD NORTH', zone: 'ZONE 10' },
{ name: 'SANDRINGHAM', zone: 'ZONE 10' },
{ name: 'CAULFIELD SOUTH', zone: 'ZONE 10' },
{ name: 'ST KILDA', zone: 'ZONE 10' },
{ name: 'ELSTERNWICK', zone: 'ZONE 10' },
{ name: 'ST KILDA EAST', zone: 'ZONE 10' },
{ name: 'GARDENVALE', zone: 'ZONE 10' },
{ name: 'ST KILDA RD', zone: 'ZONE 10' },
{ name: 'GLENHUNTLY', zone: 'ZONE 10' },
{ name: 'RIPPONLEA', zone: 'ZONE 10' },
{ name: 'HAMPTON', zone: 'ZONE 10' },
{ name: 'POINT COOK', zone: 'POINT COOK' },
{ name: 'POINT COOK RAAF', zone: 'POINT COOK' },
{ name: 'SANCTUARY LAKES', zone: 'POINT COOK' },
  ];
  filteredItems: any[] = [];
  suggestedItems: any[] = [];
  searchTerm = '';
  selected: any = null;
  showSuggestion = false;

  filterItems() {
    this.filteredItems = this.items.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.selected = null;
    this.showSuggestion = false;
  }

  showSuggestions() {
    this.suggestedItems = this.items.filter(item => item.name.toLowerCase().startsWith(this.searchTerm.toLowerCase()));
    this.showSuggestion = this.suggestedItems.length > 0;
    this.selected = null;
  }

  selectSuggestion(suggestion: any) {
    this.searchTerm = suggestion.name;
    this.filterItems();
  }
}