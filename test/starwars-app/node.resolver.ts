import { Resolver } from '@nestjs/graphql'
import { NodeFieldsDefinition, Node, GlobalID } from '../../src/nestjs-relay-tools'
import { FactionService } from './faction.service'
import { Faction } from './faction.type'
import { ShipService } from './ship.service'
import { Ship } from './ship.type'

@Resolver(Node)
export class NodeFieldsResolver extends NodeFieldsDefinition {
  constructor(private factionService: FactionService, private shipService: ShipService) {
    super()
  }

  resolveNode(globalId: GlobalID) {
    switch (globalId.type) {
      case 'Faction':
        const faction = this.factionService.getFaction(globalId.id)
        return faction ? new Faction(faction) : null
      case 'Ship':
        const ship = this.shipService.getShip(globalId.id)
        return ship ? new Ship(ship) : null
      default:
        return null
    }
  }
}
