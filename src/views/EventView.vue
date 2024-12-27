<template>
  <div class="bk__event-view">
    <div class="bk__event-view-header">
      <h2 class="event-name">{{ event.name }}</h2>
      <div class="event-info">
        <span class="event-type">{{ event.type.name }}</span>
        <span class="event-rounds">{{ event.rounds.length }} rounds</span>
      </div>
    </div>
    <div class="bk__event-view-wrapper">
      <div class="bk__event-view-controls"></div>
      <div class="bk__event-view-field">
        <div v-for="round in event.rounds" :key="round.id" class="round">
          <h3 class="round-number">Round {{ round.number }}</h3>
          <div v-for="matchUp in round.matchUps" :key="matchUp.id" class="match-up">
            <h4 class="match-up-number">Match {{ matchUp.number }}</h4>
            <div
              v-for="participant in matchUp.participants"
              :key="participant.id"
              class="match-up-participants"
            >
              <div
                class="participant"
                :class="{
                  winner: matchUp.winner === participant.user.id,
                  loser: matchUp.winner && matchUp.winner !== participant.user.id,
                }"
              >
                <span class="participant-name">{{ participant.user.name }}</span>
                <span class="participant-score">{{ participant.score }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface User {
  id: number;
  name: string;
}

interface MatchUpParticipant {
  id: number;
  user: User;
  matchUpId: number;
  score: number;
}

interface MatchUp {
  id: number;
  number: number;
  round: number;
  participants?: MatchUpParticipant[];
  winner?: number;
}

interface Round {
  id: number;
  number: number;
  matchUps: MatchUp[];
}

interface EventType {
  id: number;
  name: string;
}

interface Event {
  id: number;
  name: string;
  type: EventType;
  rounds: Round[];
}

const event: Event = {
  id: 1,
  name: 'Winter cup',
  type: {
    id: 1,
    name: 'Single elimination bracket',
  },
  rounds: [
    {
      id: 1,
      number: 1,
      matchUps: [
        {
          id: 1,
          number: 1,
          round: 1,
          winner: 1,
          participants: [
            {
              id: 1,
              matchUpId: 1,
              score: 2,
              user: {
                id: 1,
                name: 'f1anderz',
              },
            },
            {
              id: 2,
              matchUpId: 1,
              score: 1,
              user: {
                id: 2,
                name: 'rad1ant',
              },
            },
          ],
        },
        {
          id: 2,
          number: 2,
          round: 1,
          winner: 3,
          participants: [
            {
              id: 3,
              matchUpId: 2,
              score: 2,
              user: {
                id: 3,
                name: 'vik7ar',
              },
            },
            {
              id: 4,
              matchUpId: 2,
              score: 0,
              user: {
                id: 4,
                name: 's1mka',
              },
            },
          ],
        },
        {
          id: 3,
          number: 3,
          round: 1,
          winner: 5,
          participants: [
            {
              id: 5,
              matchUpId: 3,
              score: 2,
              user: {
                id: 5,
                name: 'dimka',
              },
            },
            {
              id: 6,
              matchUpId: 3,
              score: 1,
              user: {
                id: 6,
                name: 'valik',
              },
            },
          ],
        },
        {
          id: 4,
          number: 4,
          round: 1,
          winner: 7,
          participants: [
            {
              id: 7,
              matchUpId: 4,
              score: 2,
              user: {
                id: 7,
                name: 'sasha',
              },
            },
            {
              id: 8,
              matchUpId: 4,
              score: 0,
              user: {
                id: 8,
                name: 'yana',
              },
            },
          ],
        },
        {
          id: 1,
          number: 1,
          round: 1,
          winner: 1,
          participants: [
            {
              id: 1,
              matchUpId: 1,
              score: 2,
              user: {
                id: 1,
                name: 'f1anderz',
              },
            },
            {
              id: 2,
              matchUpId: 1,
              score: 1,
              user: {
                id: 2,
                name: 'rad1ant',
              },
            },
          ],
        },
        {
          id: 2,
          number: 2,
          round: 1,
          winner: 3,
          participants: [
            {
              id: 3,
              matchUpId: 2,
              score: 2,
              user: {
                id: 3,
                name: 'vik7ar',
              },
            },
            {
              id: 4,
              matchUpId: 2,
              score: 0,
              user: {
                id: 4,
                name: 's1mka',
              },
            },
          ],
        },
        {
          id: 3,
          number: 3,
          round: 1,
          winner: 5,
          participants: [
            {
              id: 5,
              matchUpId: 3,
              score: 2,
              user: {
                id: 5,
                name: 'dimka',
              },
            },
            {
              id: 6,
              matchUpId: 3,
              score: 1,
              user: {
                id: 6,
                name: 'valik',
              },
            },
          ],
        },
        {
          id: 4,
          number: 4,
          round: 1,
          winner: 7,
          participants: [
            {
              id: 7,
              matchUpId: 4,
              score: 2,
              user: {
                id: 7,
                name: 'sasha',
              },
            },
            {
              id: 8,
              matchUpId: 4,
              score: 0,
              user: {
                id: 8,
                name: 'yana',
              },
            },
          ],
        },
      ],
    },
    {
      id: 2,
      number: 2,
      matchUps: [
        {
          id: 5,
          number: 5,
          round: 2,
          winner: 1,
          participants: [
            {
              id: 1,
              matchUpId: 5,
              score: 2,
              user: {
                id: 1,
                name: 'f1anderz',
              },
            },
            {
              id: 3,
              matchUpId: 5,
              score: 1,
              user: {
                id: 3,
                name: 'vik7ar',
              },
            },
          ],
        },
        {
          id: 6,
          number: 6,
          round: 2,
          winner: 5,
          participants: [
            {
              id: 5,
              matchUpId: 6,
              score: 2,
              user: {
                id: 5,
                name: 'dimka',
              },
            },
            {
              id: 7,
              matchUpId: 6,
              score: 0,
              user: {
                id: 7,
                name: 'sasha',
              },
            },
          ],
        },
        {
          id: 5,
          number: 5,
          round: 2,
          winner: 1,
          participants: [
            {
              id: 1,
              matchUpId: 5,
              score: 2,
              user: {
                id: 1,
                name: 'f1anderz',
              },
            },
            {
              id: 3,
              matchUpId: 5,
              score: 1,
              user: {
                id: 3,
                name: 'vik7ar',
              },
            },
          ],
        },
        {
          id: 6,
          number: 6,
          round: 2,
          winner: 5,
          participants: [
            {
              id: 5,
              matchUpId: 6,
              score: 2,
              user: {
                id: 5,
                name: 'dimka',
              },
            },
            {
              id: 7,
              matchUpId: 6,
              score: 0,
              user: {
                id: 7,
                name: 'sasha',
              },
            },
          ],
        },
      ],
    },
    {
      id: 3,
      number: 3,
      matchUps: [
        {
          id: 7,
          number: 7,
          round: 3,
          winner: 1,
          participants: [
            {
              id: 1,
              matchUpId: 7,
              score: 2,
              user: {
                id: 1,
                name: 'f1anderz',
              },
            },
            {
              id: 7,
              matchUpId: 7,
              score: 1,
              user: {
                id: 5,
                name: 'dimka',
              },
            },
          ],
        },
        {
          id: 7,
          number: 7,
          round: 3,
          winner: 1,
          participants: [
            {
              id: 1,
              matchUpId: 7,
              score: 2,
              user: {
                id: 1,
                name: 'f1anderz',
              },
            },
            {
              id: 7,
              matchUpId: 7,
              score: 1,
              user: {
                id: 5,
                name: 'dimka',
              },
            },
          ],
        },
      ],
    },
    {
      id: 3,
      number: 3,
      matchUps: [
        {
          id: 7,
          number: 7,
          round: 3,
          winner: 1,
          participants: [
            {
              id: 1,
              matchUpId: 7,
              score: 2,
              user: {
                id: 1,
                name: 'f1anderz',
              },
            },
            {
              id: 7,
              matchUpId: 7,
              score: 1,
              user: {
                id: 5,
                name: 'dimka',
              },
            },
          ],
        },
      ],
    },
  ],
};
</script>

<style scoped lang="scss">
.bk__event-view {
  font-weight: 500;
  font-size: 16px;

  .bk__event-view-header {
    width: 100%;

    .event-info {
      display: flex;

      .event-type:has(+ .event-rounds) {
        border-right: 1px solid var(--neutral-800);
        padding-right: 8px;
      }

      .event-rounds {
        padding-left: 8px;
      }
    }
  }

  .bk__event-view-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    .bk__event-view-controls {
      width: 10%;
    }

    .bk__event-view-field {
      width: 90%;
      height: fit-content;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      .round {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 8px;

        .round-number {
          padding: 4px;
        }

        .match-up {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--neutral-800);

          .match-up-number {
            padding: 2px 4px;
            border-bottom: 1px solid var(--neutral-800);
          }

          .match-up-participants {
            border-bottom: 1px solid var(--neutral-800);

            &:last-child {
              border-bottom: none;
            }

            .participant {
              display: flex;
              flex-direction: row;
              justify-content: space-between;

              &.winner {
                font-weight: 700;
                color: var(--accent-900);
              }

              &.loser {
                color: var(--neutral-700);
              }

              .participant-name {
                padding: 2px 4px;
              }

              .participant-score {
                width: 20px;
                padding: 2px;
                font-weight: 600;
                text-align: center;
                border-left: 1px solid var(--neutral-800);
              }
            }
          }
        }
      }
    }
  }
}
</style>
