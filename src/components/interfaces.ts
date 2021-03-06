import Entity from '../entities/entity';
import WaitForSeconds from '../time/wait-for-seconds';
import Component from './component';

type ComponentExtender<T extends Component> = {
  new (entity: Entity): T;
};

export type ComponentClass = ComponentExtender<Component>;

export interface IComponentInjector {
  getComponent(componentType: ComponentClass): Component | null;
  addComponent(ComponentType: ComponentClass): Component;
  removeComponent(componentType: ComponentClass): void;
}

export type CoroutineEnumerator = Generator<
  unknown,
  unknown,
  WaitForSeconds | null
>;

export interface Coroutine {
  enumerator: CoroutineEnumerator;
  isActive: boolean;
  delay?: WaitForSeconds;
}

export interface ICoroutineHandler {
  coroutines: Coroutine[];
  startCoroutine(coroutine: CoroutineEnumerator): void;
  pauseCoroutine(index: number): void;
  runCoroutines(): void;
  stopCoroutine(index: number): void;
}
