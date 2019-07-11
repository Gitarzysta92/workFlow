// Reactive container 

class PropertyWrapper {
	constructor({key, value}) {
		Object.defineProperties(this, {
			_key: {
				value: key
			},
			_value: {
				value: value,
				writable: true
			},
			_subscribers: {
				value: []
			}
		});
	}

	subscribe(subscriber) {
		const idx = this._subscribers.push(subscriber) - 1;
		this._notify();
		return this.unsubscribe(idx);
	}

	unsubscribe(index) {
		return function() {
			this._subscribers = this._subscribers.filter((current, idx) => !(index === idx));
		}.bind(this);
	}

	get key() {
		return this._key;
	}

	get value() {
		return this._value;
	}

	setValue(value) {
		this._value = value;
		this._notify();
	}

	_notify() {
		const value = {[this.key]: this.value}; 
		this._subscribers.forEach(current => current(value));
	}

}



class ReactiveContainer {
	constructor(newProperties) {
		this._items = {};
		newProperties && this._initWith(newProperties);
		return {
			newParameter: this.newParameter.bind(this),
			items: this.items
		}
	}

	get items() {
		return this._items;
	}

	newParameter(key, value, options = {}) {
		const wrappedParam = this._createItem({key, value});
		this._add(wrappedParam, options);
		return wrappedParam;
	}

	_createItem(initialData) {
		return new PropertyWrapper(initialData);
	}

	_add(item, options) {
		const key = item.key;
		const {
			writable = false, 
			enumerable = true,
			configurable = true
		} = options;

		Object.defineProperty(this._items, key, {
			value: item,
			writable: writable,
			enumerable: enumerable,
			configurable: configurable,
		})
	}

	_initWith(newProps) {
		const { parameters } = newProps;
		const paramKeys = Object.keys(parameters);
		paramKeys.forEach(key => this.newParameter(key, parameters[key]));
	}
}

export default ReactiveContainer;