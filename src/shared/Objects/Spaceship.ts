import { ReplicatedStorage, Workspace } from "@rbxts/services";

// Class is to create a type of an object, the schematic
export class Spaceship
{
	public Health = 100;
	public Damage = 25;

	public readonly Model = ReplicatedStorage.FindFirstChild("Assets")?.FindFirstChild("Spaceship")?.Clone() as Model;

	public Initialize(): void
	{
		this.Model.Parent = Workspace;
	}

	public ApplyThrust(): void
	{
		const Velocity = this.Model.FindFirstChildOfClass("LinearVelocity");

		if (Velocity)
		{
			Velocity.VectorVelocity = new Vector3(0, 0, 10);
		}
	}

	public ApplyRotationalThrust(): void
	{
		const Velocity = this.Model.FindFirstChildOfClass("AngularVelocity");

		if (Velocity)
		{
			Velocity.AngularVelocity = new Vector3(0, 10, 0);
		}
	}

	public Repair(Amount: number): void
	{
		this.Health += Amount;
	}

	public TakeDamage(Amount: number): void
	{
		this.Health -= Amount;
	}
}
