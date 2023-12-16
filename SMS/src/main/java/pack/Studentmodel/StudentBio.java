package pack.Studentmodel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="studentbio")
public class StudentBio {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	protected int id;
	@Column(name = "surname")
	protected String surname;
	@Column(name = "firstName")
	protected String firstName;
	@Column(name = "gender")
	protected boolean gender;
	@Column(name = "bloodGroup")
	protected String bloodGroup;
	@Column(name = "nationality")
	protected String nationality;
	@Column(name = "religion")
	protected String religion;
	
	// StudentBio class without arguments
	public StudentBio() {
		
	}
	
	// StudentBio class with arguments
	public StudentBio(int id, String surname, String firstName, boolean gender, String bloodGroup, String nationality, String religion) {
		super();
		
		this.id = id;
		this.surname = surname;
		this.firstName = firstName;
		this.gender = gender;
		this.bloodGroup = bloodGroup;
		this.nationality = nationality;
		this.religion = religion;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getSurname() {
		return surname;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public boolean isGender() {
		return gender;
	}

	public void setGender(boolean gender) {
		this.gender = gender;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getReligion() {
		return religion;
	}

	public void setReligion(String religion) {
		this.religion = religion;
	}
	
	
	
	
	
}
