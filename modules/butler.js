import { EnhancedConditions } from "./enhanced-conditions/enhanced-conditions.js";
import { MightySummoner } from "./mighty-summoner.js";

export const NAME = "combat-utility-belt";

export const TITLE = "Combat Utility Belt";

export const SHORTNAME = "cub";

export const PATH = "modules/combat-utility-belt";

export const WIKIPATH = "https://github.com/death-save/combat-utility-belt/wiki"

export const GADGETS = {
    giveXP: {
        name: "Award XP",
        info: "Provides an end of combat prompt to distribute XP from defeated hostile combatants.",
        wiki: `${WIKIPATH}/award-xp`
    },
    concentrator: {
        name: "Concentrator",
        info: "Manages Concentration in the dnd5e game system.",
        wiki: `${WIKIPATH}/award-xp`
    },
    enhancedConditions: {
        name: "Enhanced Conditions",
        info: "Provides the ability to map Conditions to Status Effect icons",
        wiki: `${WIKIPATH}/enhanced-conditions`
    },
    hideNames: {
        name: "Hide NPC Names",
        info: "Replaces NPC names with a new name of your choice",
        wiki: `${WIKIPATH}/hide-names`
    },
    panSelect: {
        name: "Pan/Select",
        info: "Automatic panning and selection of tokens during combat",
        wiki: `${WIKIPATH}/pan-select`
    },
    rerollInitiative: {
        name: "Reroll Initiative",
        info: "Rerolls Initiative on each Combat round change",
        wiki: `${WIKIPATH}/reroll-initiative`
    },
    tempCombatants: {
        name: "Temporary Combatants",
        info: "Allows the creation of temporary combatants to track things like environmental or lair actions",
        wiki: `${WIKIPATH}/temporary-combatants`
    },
    triggler: {
        name: "Triggler",
        info: "A trigger-management system for token/actor attribute changes",
        wiki: `${WIKIPATH}/triggler`
    },
    actorUtility: {
        name: "Misc Actor",
        info: "Miscellaneous Actor enhancements",
        wiki: `${WIKIPATH}/actor-misc`
    },
    tokenUtility: {
        name: "Misc Token",
        info: "Miscellaneous Token enhancements",
        wiki: null
    }
}
/**
 * Stores information about well known game systems. All other systems will resolve to "other"
 */
export const KNOWN_GAME_SYSTEMS = {
    dnd5e: {
        id: "dnd5e",
        name: "Dungeons & Dragons 5th Edition",
        concentrationAttribute: "con",
        healthAttribute: "attributes.hp",
        initiative: "attributes.initiative"
    },
    pf1: {
        id: "pf1",
        name: "Pathfinder",
        concentrationAttribute: "",
        healthAttribute: "attributes.hp",
        initiative: "attributes.init.total"
    },
    pf2e: {
        id: "pf2e",
        name: "Pathfinder 2nd Edition",
        concentrationAttribute: "",
        healthAttribute: "attributes.hp",
        initiative: "attributes.perception"
    },
    wfrp4e: {
        id: "wfrp4e",
        name: "Warhammer Fantasy Roleplaying Game 4th Edition",
        concentrationAttribute: "",
        healthAttribute: "status.wounds",
        initiative: "characteristics.i"
    },
    archmage: {
        id: "archmage",
        name: "13th Age",
        concentrationAttribute: "",
        healthAttribute: "attributes.hp",
        initiative: "attributes.init.mod"
    },
    other: {
        id: "other",
        name: "Custom/Other",
        concentrationAttribute: "--Unknown--",
        healthAttribute: "--Unknown--",
        initiative: "--Unknown--"
    }
} 
     
export const HEALTH_STATES = {
    HEALTHY: "healthy",
    INJURED: "injured",
    DEAD: "dead",
    UNCONSCIOUS: "unconscious"
}

export const DEFAULT_CONFIG = {
    concentrator: {
        conditionName: "Concentrating",
        enable: false,
        outputChat: false,
        promptRoll: false,
        autoConcentrate: false,
        notifyDouble: {
            none: "None",
            gm: "GM Only",
            all: "Everyone"
        },
        icon: "modules/combat-utility-belt/icons/concentrating.svg",
        alias: "CUB: Concentrator"
    },
    cubPuter: {
        id: "cub-puter",
        title: "CUBPuter",
        buttonId: "cub-puter-button",
        config: {
            greeting: true,
            instructions: true
        }
    },
    enhancedConditions: {
        iconPath: `${PATH}/icons/`,
        conditionMapsPath: `${PATH}/condition-maps`,
        outputChat: false,
        outputCombat: false,
        removeDefaultEffects: false,
        conditionLab: {
            id: "cub-condition-lab",
            title: "Condition Lab",
        },
        title: "CUB: Enhanced Conditions",
        mapTypes: {
            default: "System - Default",
            custom: "System - Custom",
            other: "Other/Imported"
        },
        referenceTypes: [
            {
                id: "journalEntry",
                name: "Journal",
                icon: `fas fa-book-open`
            },
            {
                id: "compendium.journalEntry",
                name: "Journal (C)",
                icon: `fas fa-atlas`
            },
            {
                id: "item",
                name: "Item",
                icon: `fas fa-suitcase`
            },
            {
                id: "compendium.item",
                name: "Item (C)",
                icon: `fas fa-suitcase`
            }
        ],
        templates: {
            chatOutput: `${PATH}/templates/chat-conditions.html`,
            importDialog: `${PATH}/templates/import-conditions.html`
        }
    },
    giveXP: {
        enable: false
    },
    hideNames: {
        enable: false,
        hideFooter: false,
        replacementString: "Unknown Creature"
    },
    injuredDead: {
        enableInjured: false,
        enableDead: false,
        enableUnconscious: false,
        injuredIcon: "icons/svg/blood.svg",
        threshold: 50,
        deadIcon: "icons/svg/skull.svg",
        markDefeated: false,
        unconsciousActorType: "",
        unconsciousIcon: "icons/svg/unconscious.svg"
    },
    mightySummoner: {
        enable: false,
        featName: "Mighty Summoner"
    },
    panSelect: {
        enablePan: false,
        enableSelect: false,
        panGM: {
            none: "None",
            npc: "NPC",
            all: "All"
        },
        panPlayers: {
            none: "None",
            owner: "Owner",
            observer: "Observer",
            all: "All"
        },
        selectGM: false,
        selectPlayers: false,
        observerDeselect: false,
    },
    rerollInitiative: {
        enable: false,
        rerollTempCombatants: false
    },
    tempCombatants: {
        enable: false
    },
    actorUtility: {
        initiativeFromSheet: false
    },
    tokenUtility: {
        autoRollHP: false,
        effectSize: {
            large: {
                multiplier: 4,
                divisor: 2
            },
            medium: {
                multiplier: 3,
                divisor: 3
            },
            small: {
                multiplier: 2,
                divisor: 5
            }
        },
        effectSizeChoices: {
            large: "Large",
            medium: "Medium",
            small: "Small"
        }
    },
    trackerUtility: {
        enableGiveXP: false,
    },
    triggler: {
        form: {
            title: "Triggler"
        },
        flags: {
            macro: "macroTrigger"
        },
        operators: {
            eq: "=",
            lt: "<",
            ne: "!=",
            lteq: "<=",
            gt: ">",
            gteq: ">="
        },
        options: {
            percent: "%"
        },
        templatePaths: {
            macroTriggerSelect: `${PATH}/templates/trigger-select.html`
        }
        
    }
}

export const FLAGS = {
    mightySummoner: {
        mightySummoner: "mightySummoner"
    },
    temporaryCombatants: {
        temporaryCombatant: "temporaryCombatant"
    }
}

export const SETTING_KEYS = {
    concentrator: {
        enable: "enableConcentrator",
        conditionName: "concentratorConditionName",
        outputChat: "concentratorOutputToChat",
        autoConcentrate: "autoConcentrate",
        concentrationAttribute: "concentrationAttribute",
        notifyDouble: "notifyDoubleConcentration",
        healthAttribute: "concentratorHealthAttribute", //validate necessity
        prompt: "concentratorPromptPlayer"
    },
    cubPuter: {
        menu: "cubPuter",
        config: "cubPuterConfig"
    },
    enhancedConditions: {
        enable: "enableEnhancedConditions",
        coreIcons: "coreStatusIcons",
        system: "activeSystem",
        map: "activeConditionMap",
        defaultMaps: "defaultConditionMaps",
        mapType: "conditionMapType",
        removeDefaultEffects: "removeDefaultEffects",
        outputChat: "conditionsOutputToChat",
        outputCombat: "conditionsOutputDuringCombat"
    },
    giveXP: {
        enable: "enableGiveXP"
    },
    hideNames: {
        enable: "enableHideNames",
        replacementString: "replacementString",
        hideFooter: "hideFooter"
    },
    injuredDead: {
        enableInjured: "enableInjured",
        enableDead: "enableDead",
        enableUnconscious: "enableUnconscious",
        injuredIcon: "injuredIcon",
        deadIcon: "deadIcon",
        unconsciousIcon: "unconsciousIcon",
        threshold: "injuredThreshold",
        healthAttribute: "healthAttribute",
        markDefeated: "markDefeated",
        unconsciousActorType: "unconsciousActorType"
    },
    mightySummoner: {
        enable: "enableMightySummoner",
        featName: "mightySummonerFeatName"
    },
    panSelect: {
        enablePan: "enablePan",
        panGM: "panGM",
        panPlayers: "panPlayers",
        enableSelect: "enableSelect",
        selectGM: "selectGM",
        selectPlayers: "selectPlayers",
        observerDeselect: "observerDeselect"
    },
    rerollInitiative: {
        enable: "enableRerollInitiative",
        rerollTemp: "rerollTempCombatants"
    },
   
    tempCombatants: {
        enable: "enableTempCombatants",

    },
    actorUtility: {
        initiativeFromSheet: "initiativeFromSheet"
    },
    tokenUtility: {
        mightySummoner: "enableMightySummoner",
        mightySummonerFeat: "mightySummonerFeatName",
        autoRollHP: "autoRollHP",
        effectSize: "effectSize"
    },
    triggler: {
        triggers: "storedTriggers"
    }
}

